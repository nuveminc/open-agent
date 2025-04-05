
import { exec } from 'child_process';
import { BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { promisify } from 'util';
import * as fs from 'fs';
import * as https from 'https';
const execAsync = promisify(exec);

export async function checkPythonInstallation(): Promise<boolean> {
    try {
      const { stdout } = await execAsync('python --version');
      const version = stdout.trim();
      const match = version.match(/Python (\d+\.\d+\.\d+)/);
      if (match) {
        const [, versionNumber] = match;
        const [major] = versionNumber.split('.');
        return parseInt(major) >= 3;
      }
      return false;
    } catch {
      return false;
    }
  }

  export async function installPython(app: Electron.App, win: BrowserWindow): Promise<{ success: boolean; error?: string }> {
    try {
      // Download Python installer
      const pythonVersion = '3.11.8';
      const installerUrl = `https://www.python.org/ftp/python/${pythonVersion}/python-${pythonVersion}-amd64.exe`;
      const installerPath = path.join(app.getPath('temp'), 'python-installer.exe');
      
      win.webContents.send('python-install-progress', 10);
      
      // Download installer using https
      await new Promise<void>((resolve, reject) => {
        const file = fs.createWriteStream(installerPath);
        https.get(installerUrl, (response) => {
          if (response.statusCode !== 200) {
            reject(new Error(`Failed to download Python installer: ${response.statusCode}`));
            return;
          }
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            resolve();
          });
        }).on('error', reject);
      });
  
      win.webContents.send('python-install-progress', 40);
  
      // Run installer silently with PATH option
      // await execAsync(`"${installerPath}" /quiet InstallAllUsers=1 PrependPath=1`);
    
      
      win.webContents.send('python-install-progress', 90);
  
      // Verify installation
      const isInstalled = await checkPythonInstallation();
    //   const isInstalled = false;
      if (!isInstalled) {
        throw new Error('Python installation verification failed');
      }
  
      win.webContents.send('python-install-progress', 100);

      // Delete installer file
      fs.unlinkSync(installerPath);

      // start FastAPI server
      

      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Installation failed'
      };
    }
  }

  export const registerHandlers = (app: Electron.App, mainWindow: BrowserWindow) => {
    ipcMain.handle('python-check', async () => {
        return checkPythonInstallation();
      });
    
    ipcMain.handle('python-install', async () => {
      return installPython(app,mainWindow);
    });
  }