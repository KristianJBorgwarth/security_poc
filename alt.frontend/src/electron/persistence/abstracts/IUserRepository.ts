import { IRepository } from "./IRepository.js";
import { User } from './../entities/User.js';

export interface IUserRepository extends IRepository<User> {
    existsAsync(): Promise<boolean>;
}