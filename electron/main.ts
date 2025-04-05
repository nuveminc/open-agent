/* eslint-disable @typescript-eslint/no-require-imports */
import { app, BrowserWindow, nativeTheme } from 'electron';
import { registerHandlers } from './ipc/handlers';
import path from 'path';

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

  registerHandlers(app, mainWindow);

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
