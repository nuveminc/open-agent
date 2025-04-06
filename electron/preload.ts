import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('python', {
  check: () => ipcRenderer.invoke('python-check'),
  install: () => ipcRenderer.invoke('python-install'),
  installDependencies: () => ipcRenderer.invoke('python-install-dependencies'),
  startFastApi: () => ipcRenderer.invoke('fastapi-start'),
  setInstallProgress: (callback: (progress: number) => void) => {
    const subscription = (_: unknown, progress: number) => callback(progress);
    ipcRenderer.on('python-install-progress', subscription);
    return () => {
      ipcRenderer.removeListener('python-install-progress', subscription);
    };
  },
});
