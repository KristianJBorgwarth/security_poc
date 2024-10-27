const { ipcRenderer } = require('electron');
const electron = require('electron');


electron.contextBridge.exposeInMainWorld('electron', {

    createUser: (connectionId: string, username: string) => ipcRenderer.invoke('user:create', connectionId, username),

    userExists: () => ipcRenderer.invoke('user:exists'),

    createContact: (connectionId: string, nickname: string, user: string) => ipcRenderer.invoke('contact:create', connectionId, nickname, user),

} satisfies Window['electron']);
