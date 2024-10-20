namespace Messaging.Application.Contracts;

public interface IRepository<T>
{
    public Task<T> GetByIdAsync(Guid id);
    public Task<IEnumerable<T>> GetAllAsync();
    public Task CreateAsync(T entity);
    public Task UpdateAsync(T entity);
}