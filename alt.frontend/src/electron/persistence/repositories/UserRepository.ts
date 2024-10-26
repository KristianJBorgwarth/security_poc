import { Repository } from "typeorm";
import { IRepository } from "../abstracts/IRepository.js";
import { User } from "../entities/User.js";
import { AppDataSource } from "../data/DataSource.js";

export class UserRepository implements IRepository<User> {
    private readonly userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
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