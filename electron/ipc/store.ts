/* eslint-disable @typescript-eslint/no-explicit-any */
import { ipcRenderer } from 'electron';

export interface Store {
  get(key: string): Promise<any>;
  set(key: string, val: any): Promise<void>;
}

const store: Store = {
  get(key: string): Promise<any> {
    return ipcRenderer.invoke('electron-store-get', key);
  },
  set(key: string, val: any): Promise<void> {
    return ipcRenderer.invoke('electron-store-set', key, val);
  },
}

export { store };
module.exports = { store };