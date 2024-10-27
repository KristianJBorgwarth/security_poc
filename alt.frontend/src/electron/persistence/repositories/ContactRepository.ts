import { Repository } from 'typeorm';
import { IContactRepository } from '../abstracts/IContactRepository.js';
import { Contact } from '../entities/Contact.js';
import { AppDataSource } from '../data/DataSource.js';

export class ContactRepository implements IContactRepository {
    private readonly contactRepository: Repository<Contact>;

    constructor() {
        this.contactRepository = AppDataSource.getRepository(Contact);
    }
    async getAllAsync(): Promise<Contact[]> {
        return await this.contactRepository.find();
    }
    async createAsync(entity: Contact): Promise<Contact> {
        return await this.contactRepository.save(entity);
    }
    async getByIdAsync(id: string): Promise<Contact | null> {
        throw new Error('Method not implemented.');
    }
    async updateAsync(entity: Contact): Promise<Contact> {
        throw new Error('Method not implemented.');
    }
    async deleteAsync(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }
}