import { Contact } from "../entities/Contact.js";
import { IRepository } from "./IRepository.js";

export interface IContactRepository extends IRepository<Contact> {
    getAllAsync(): Promise<Contact[]>;
}