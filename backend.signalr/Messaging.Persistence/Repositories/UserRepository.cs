using Messaging.Application.Contracts;
using Messaging.Domain.Entities;

namespace Messaging.Persistence.Repositories;

public class UserRepository : IUserRepository
{
    public Task<User> GetByIdAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task<IEnumerable<User>> GetAllAsync()
    {
        throw new NotImplementedException();
    }

    public Task CreateAsync(User entity)
    {
        throw new NotImplementedException();
    }

    public Task UpdateAsync(User entity)
    {
        throw new NotImplementedException();
    }
}