const { contextBridge, ipcRenderer } = require('electron');
type IpcRendererEvent = Electron.IpcRendererEvent;

interface IpcApi {
  send: (channel: string, data: unknown) => void;
  receive: (channel: string, func: (...args: unknown[]) => void) => void;
}

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'api',
  {
    send: (channel: string, data: unknown) => {
      ipcRenderer.send(channel, data);
    },
    receive: (channel: string, func: (...args: unknown[]) => void) => {
      ipcRenderer.on(channel, (_event: IpcRendererEvent, ...args: unknown[]) => func(...args));
    }
  } as IpcApi
);
