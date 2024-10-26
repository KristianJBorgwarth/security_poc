import { ipcMain } from 'electron';
import { UserRepository } from '../persistence/repositories/UserRepository.js';
import { User } from '../persistence/entities/User.js';


export function registerUserhandlers() {
    const userRepo = new UserRepository();

    ipcMain.handle('user:create', async (_event, connectionId, name) => {
        return await userRepo.createAsync(new User(connectionId, name));
    });
};

