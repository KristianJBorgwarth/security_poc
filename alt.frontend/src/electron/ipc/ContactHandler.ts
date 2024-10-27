import { ipcMain } from "electron";
import { ContactRepository } from "../persistence/repositories/ContactRepository.js";
import { Contact } from "../persistence/entities/Contact.js";

export function registerContactHandlers() {
    const contactRepo = new ContactRepository();

    ipcMain.handle('contact:create', async (_event, connectionId: string, nickname: string, userId: string) => {
        return await contactRepo.createAsync(new Contact(connectionId, nickname, userId));
    });

    ipcMain.handle('contact:getAll', async (_event) => {
        return await contactRepo.getAllAsync();
    });
}