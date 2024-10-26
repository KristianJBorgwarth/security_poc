import { AppDataSource } from "./data/DataSource.js";

export async function initializeDatabase() {
    try {
        await AppDataSource.initialize();
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error during database initialization:', error);
    }
}