export interface IRepository<T> {
    createAsync(entity: T): Promise<T>;
    getByIdAsync(id: string): Promise<T | null>;
    updateAsync(entity: T): Promise<T>;
    deleteAsync(id: string): Promise<void>;
}