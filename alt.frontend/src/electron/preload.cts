const { ipcRenderer } = require('electron');
const electron = require('electron');


electron.contextBridge.exposeInMainWorld('electron', {
    createUser: (connectionId: string, username: string) => ipcRenderer.invoke('user:create', connectionId, username),
    userExists: () => ipcRenderer.invoke('user:exists')
} satisfies Window['electron']);
