import { app, BrowserWindow } from 'electron';
import path from 'path';
import { IsDevelopment } from './utils.js';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
        }
    });

    if (IsDevelopment()) {
        mainWindow.loadURL('http://localhost:5123');
    } else {
        mainWindow.loadURL(path.join(app.getAppPath(), 'dist-react/index.html'));
    }

});