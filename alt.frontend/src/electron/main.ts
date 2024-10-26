import { app, BrowserWindow } from 'electron';
import path from 'path';
import { generateUUID, getPreloadPath, IsDevelopment } from './Utilities.js';
import { User } from './persistence/entities/User.js';
import { UserRepository } from './persistence/repositories/UserRepository.js';
import { initializeDatabase } from './persistence/data/DataSource.js';

app.on('ready', async () => {
    await initializeDatabase();

    await testAddUser();
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

async function testAddUser() {
    const repo = new UserRepository();
    repo.createAsync(new User(generateUUID(), 'test'));
}