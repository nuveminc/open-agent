import { app, BrowserWindow, ipcMain } from 'electron';
import { exec, ChildProcess } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';
import { loadEnv } from '../utils/env';
import treeKill from 'tree-kill';

const execAsync = promisify(exec);

/**
 * Environment configuration loaded from .env files
 * Contains flags for installed components:
 * - PYTHON_INSTALLED: Whether Python is installed
 * - FASTAPI_INSTALLED: Whether FastAPI is installed
 * - OLLAMA_INSTALLED: Whether Ollama is installed
 */
const ENV = loadEnv();

console.log('DOTENV Environment:', process.env.NODE_ENV);
console.log('DOTENV Environment:', process.env.PYTHON_INSTALLED);
console.log('DOTENV Environment:', typeof process.env.PYTHON_INSTALLED);

// Keep track of running processes
let fastApiProcess: ChildProcess | null = null;

/**
 * Cleans up and terminates the FastAPI server process
 * @returns Promise that resolves when the cleanup is complete
 */
export async function cleanupFastAPI(): Promise<void> {
  return new Promise((resolve) => {
    if (fastApiProcess && fastApiProcess.pid) {
      console.log('Stopping FastAPI server...');
      treeKill(fastApiProcess.pid, 'SIGTERM', (err) => {
        if (err) {
          console.error('Error killing FastAPI process:', err);
        } else {
          console.log('FastAPI process terminated successfully');
        }
        fastApiProcess = null;
        resolve();
      });
    } else {
      resolve();
    }
  });
}

/**
 * Checks if Python is installed and meets version requirements
 * @returns Promise<boolean> True if Python is installed and meets requirements
 */
async function checkPythonInstallation(): Promise<boolean> {
  if (process.env.NODE_ENV === 'development') {
    return Promise.resolve(ENV.PYTHON_INSTALLED as boolean);
  }

  try {
    const { stdout } = await execAsync('python --version');
    if (stdout.includes('Python')) {
      const versionNumber = stdout.split(' ')[1];
      const [major] = versionNumber.split('.');
      return parseInt(major) >= 3;
    }
    console.log('Python not found');
    return false;
  } catch {
    return false;
  }
}

/**
 * Installs FastAPI and its dependencies using pip
 * @param win BrowserWindow instance for sending progress updates
 */
async function installFastAPIDependencies(win: BrowserWindow): Promise<void> {
  if (!ENV.PYTHON_INSTALLED) {
    await execAsync('python -m ensurepip --upgrade');
  }
  
  win.webContents.send('python-install-progress', {
    stage: 'dependencies',
    stageProgress: 50,
    currentStage: 1,
    totalStages: 4,
    message: 'Installing FastAPI dependencies...'
  });
  
  if (!ENV.FASTAPI_INSTALLED) {
    await execAsync('pip install fastapi uvicorn');
  }
  
  win.webContents.send('python-install-progress', {
    stage: 'dependencies',
    stageProgress: 100,
    currentStage: 1,
    totalStages: 4,
    message: 'FastAPI dependencies installed successfully'
  });
}

/**
 * Downloads a file from a URL and saves it to the specified path
 * @param url URL of the file to download
 * @param destPath Local path where the file should be saved
 */
async function downloadFile(url: string, destPath: string): Promise<void> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download file: ${response.status} ${response.statusText}`);
  }
  if (!response.body) {
    throw new Error('Response body is null');
  }
  
  const fileStream = fs.createWriteStream(destPath);
  const reader = response.body.getReader();
  
  try {
    let isDone = false;
    while (!isDone) {
      const { done, value } = await reader.read();
      isDone = done;
      if (!done) {
        fileStream.write(value);
      }
    }
  } finally {
    reader.releaseLock();
    fileStream.end();
  }

  await new Promise<void>((resolve, reject) => {
    fileStream.on('finish', () => resolve());
    fileStream.on('error', reject);
  });
}

/**
 * Installs Python if not already installed
 * @param win BrowserWindow instance for sending progress updates
 * @returns Object indicating success/failure and any error message
 */
async function installPython(win: BrowserWindow): Promise<{ success: boolean; error?: string }> {
  try {
    win.webContents.send('python-install-progress', {
      stage: 'python',
      stageProgress: 0,
      currentStage: 0,
      totalStages: 4,
      message: 'Downloading Python installer...'
    });

    const pythonVersion = '3.11.8';
    const installerUrl = `https://www.python.org/ftp/python/${pythonVersion}/python-${pythonVersion}-amd64.exe`;
    const installerPath = path.join(app.getPath('temp'), 'python-installer.exe');

    await downloadFile(installerUrl, installerPath);

    win.webContents.send('python-install-progress', {
      stage: 'python',
      stageProgress: 40,
      currentStage: 0,
      totalStages: 4,
      message: 'Installing Python...'
    });

    if (!ENV.PYTHON_INSTALLED) {
      await execAsync(`"${installerPath}" /quiet InstallAllUsers=1 PrependPath=1`);
    }
    
    win.webContents.send('python-install-progress', {
      stage: 'python',
      stageProgress: 90,
      currentStage: 0,
      totalStages: 4,
      message: 'Verifying Python installation...'
    });

    const isInstalled = await checkPythonInstallation();
    if (!isInstalled) {
      throw new Error('Python installation verification failed');
    }

    if (!ENV.PYTHON_INSTALLED) {
      fs.unlinkSync(installerPath);
    }

    win.webContents.send('python-install-progress', {
      stage: 'python',
      stageProgress: 100,
      currentStage: 0,
      totalStages: 4,
      message: 'Python installed successfully'
    });

    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Python installation failed'
    };
  }
}


/**
 * Starts the FastAPI server
 * @param win BrowserWindow instance for sending progress updates
 */
async function startFastAPI(win: BrowserWindow): Promise<void> {
  // If process is already running, just return
  if (fastApiProcess) {
    console.log('FastAPI server already running');
    return;
  }

  win.webContents.send('python-install-progress', {
    stage: 'fastapi',
    stageProgress: 50,
    currentStage: 2,
    totalStages: 4,
    message: 'Starting FastAPI server...'
  });

  const serverPath = path.join(app.getAppPath(), 'backend', 'main.py');
  fastApiProcess = exec(`python -m uvicorn main:app --reload --port 3000`, {
    cwd: path.dirname(serverPath)
  });

  // Handle server output
  fastApiProcess.stdout?.on('data', (data) => {
    console.log('FastAPI:', data);
  });

  fastApiProcess.stderr?.on('data', (data) => {
    console.error('FastAPI Error:', data);
  });

  // Handle server exit
  fastApiProcess.on('exit', (code) => {
    console.log('FastAPI server exited with code:', code);
    fastApiProcess = null;
  });

  // Wait for server to start and perform health check
  let isHealthy = false;
  const maxAttempts = 10;
  let attempts = 0;

  while (!isHealthy && attempts < maxAttempts) {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await fetch('http://localhost:3000/api/v1/health');
      const health = await response.json();
      
      if (health.status === 'Running') {
        isHealthy = true;
        console.log('FastAPI server health check passed:', health);
      } else {
        throw new Error('Server not ready');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      attempts++;
      console.log(`Health check attempt ${attempts}/${maxAttempts} failed`);
    }
  }

  if (!isHealthy) {
    if (fastApiProcess && fastApiProcess.pid) {
      treeKill(fastApiProcess.pid, 'SIGTERM', (err) => {
        if (err) {
          console.error('Error killing FastAPI process:', err);
        }
      });
      fastApiProcess = null;
    }
    throw new Error('FastAPI server failed to start properly');
  }

  win.webContents.send('python-install-progress', {
    stage: 'fastapi',
    stageProgress: 100,
    currentStage: 2,
    totalStages: 4,
    message: 'FastAPI server started successfully'
  });
}

/**
 * Checks if Ollama is installed and meets version requirements
 * @returns Promise<boolean> True if Ollama is installed and meets requirements
 */
async function checkOllamaInstallation(): Promise<boolean> {
  let isHealthy = false;
  await new Promise(resolve => setTimeout(resolve, 1000));
  const response = await fetch('http://localhost:11434');
  const text = await response.text();
  
  if (text.includes('Ollama')) {
    isHealthy = true;
    console.log('Ollama health check passed');
  }
  return isHealthy;
}

/**
 * Installs Ollama if not already installed
 * @param win BrowserWindow instance for sending progress updates
 */
async function installOllama(win: BrowserWindow): Promise<void> {
  if (ENV.OLLAMA_INSTALLED || await checkOllamaInstallation()) {
    win.webContents.send('python-install-progress', {
      stage: 'ollama',
      stageProgress: 100,
      currentStage: 3,
      totalStages: 4,
      message: 'Ollama already installed'
    });
    return;
  }

  win.webContents.send('python-install-progress', {
    stage: 'ollama',
    stageProgress: 0,
    currentStage: 3,
    totalStages: 4,
    message: 'Downloading Ollama...'
  });

  const installerUrl = 'https://github.com/ollama/ollama/releases/download/v0.1.29/ollama-windows-amd64.msi';
  const installerPath = path.join(app.getPath('temp'), 'ollama-installer.msi');

  // Download the installer
  await downloadFile(installerUrl, installerPath);

  win.webContents.send('python-install-progress', {
    stage: 'ollama',
    stageProgress: 50,
    currentStage: 3,
    totalStages: 4,
    message: 'Installing Ollama...'
  });

  await execAsync(`msiexec /i "${installerPath}" /quiet`);

  // Delete installer file
  fs.unlinkSync(installerPath);

  // Wait for Ollama service to start and perform health check
  let isHealthy = false;
  const maxAttempts = 10;
  let attempts = 0;

  while (!isHealthy && attempts < maxAttempts) {
    try {
      isHealthy = await checkOllamaInstallation();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      attempts++;
      console.log(`Health check attempt ${attempts}/${maxAttempts} failed`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  if (!isHealthy) {
    throw new Error('Ollama failed to start properly');
  }

  win.webContents.send('python-install-progress', {
    stage: 'ollama',
    stageProgress: 100,
    currentStage: 3,
    totalStages: 4,
    message: 'Ollama installed successfully'
  });
}

/**
 * Installs all required dependencies including Python, FastAPI, and Ollama
 * @param win BrowserWindow instance for sending progress updates
 * @returns Object indicating success/failure and any error message
 */
async function installDependencies(win: BrowserWindow): Promise<{ success: boolean; error?: string }> {

	try {
		// Development environment test
		if (!ENV.PYTHON_INSTALLED) {
			await installPython(win);

			// Install dependencies
			await installFastAPIDependencies(win);

			// Start FastAPI server
			await startFastAPI(win);

			// Install Ollama
			await installOllama(win);

			// Complete
			win.webContents.send('python-install-progress', {
				stage: 'complete',
				stageProgress: 100,
				currentStage: 4,
				totalStages: 4,
				message: 'Installation complete'
			});

			return { success: true };
		} else {
			return { success: true };
		}
	} catch (error) {
		return { 
			success: false, 
			error: error instanceof Error ? error.message : 'Installation failed'
		};
  }
}

export function registerHandlers(win: BrowserWindow): void {
  ipcMain.handle('python-check', checkPythonInstallation);
  ipcMain.handle('python-install', () => installPython(win));
  ipcMain.handle('python-install-dependencies', () => installDependencies(win));
  ipcMain.handle('fastapi-start', () => startFastAPI(win));
}