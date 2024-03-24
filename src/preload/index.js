import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  v8:()=> process.versions.v8,
})
contextBridge.exposeInMainWorld('capture', {
  loggedIn:(data)=>  ipcRenderer.send('user-login', data),
  loggedOut:()=>ipcRenderer.send('user-logout')
})