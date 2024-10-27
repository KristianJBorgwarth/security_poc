import { app, BrowserWindow } from 'electron';
import path from 'path';
import { getPreloadPath, IsDevelopment } from './Utilities.js';
import { initializeDatabase } from './persistence/data/DataSource.js';
import { registerUserhandlers } from './ipc/UserHandler.js';
import { registerContactHandlers } from './ipc/ContactHandler.js';

app.on('ready', async () => {
    await initializeDatabase();
    registerUserhandlers();
    registerContactHandlers();

    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            preload: getPreloadPath(),
        }
    });

    if (IsDevelopment()) {
        mainWindow.loadURL('http://localhost:5123');
    } else {
        mainWindow.loadURL(path.join(app.getAppPath(), 'dist-react/index.html'));
    }
});
