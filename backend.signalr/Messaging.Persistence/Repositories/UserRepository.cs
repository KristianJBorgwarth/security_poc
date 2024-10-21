using Messaging.Application.Contracts;
using Messaging.Domain.Entities;
using Messaging.Persistence.Data;

namespace Messaging.Persistence.Repositories;

public class UserRepository(MessagingDbContext ctx) : IUserRepository
{
    public Task<User?> GetByIdAsync(Guid id)
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