/* eslint-disable @typescript-eslint/no-require-imports */
import { app, BrowserWindow, nativeTheme } from 'electron';
import { cleanupFastAPI, registerHandlers } from './ipc/handlers';
import path from 'path';

// Set NODE_ENV if not already set
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = app.isPackaged ? 'production' : 'development';
}

const isDev = !app.isPackaged;

async function createWindow(): Promise<void> {
  const light = '#ffffff';
  const dark = '#1a1b1e';
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: nativeTheme.shouldUseDarkColors ? dark : light,
    show: false, // Don't show the window until it's ready
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      preload: isDev 
        ? path.join(__dirname, 'preload.js')
        : path.join(process.resourcesPath, 'app', 'dist', 'electron', 'preload.js')
    }
  });

  // Update background color when system theme changes
  nativeTheme.on('updated', () => {
    mainWindow.setBackgroundColor(nativeTheme.shouldUseDarkColors ? dark : light);
  });

  registerHandlers(mainWindow);

  // Show window when it's ready to prevent flickering
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));
  }
}

app.whenReady().then(createWindow).catch(console.error);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

  // Ensure cleanup on app quit
  app.on('quit', async () => {
    await cleanupFastAPI();
  });

  // Handle cleanup on app exit
app.on('before-quit', async (e) => {
  e.preventDefault(); // Prevent immediate quit
  await cleanupFastAPI();
  app.exit();
});

