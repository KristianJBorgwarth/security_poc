import { Repository } from "typeorm";
import { User } from "../entities/User.js";
import { AppDataSource } from "../data/DataSource.js";
import { IUserRepository } from "../abstracts/IUserRepository.js";

export class UserRepository implements IUserRepository {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }
    async existsAsync(): Promise<boolean> {
        return await this.userRepository.count() > 0;
    }

    async createAsync(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async getByIdAsync(id: string): Promise<User | null> {
        return await this.userRepository.findOne({ where: { id } });
    }

    async updateAsync(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async deleteAsync(id: string): Promise<void> {
        await await this.userRepository.delete(id);
    }
}