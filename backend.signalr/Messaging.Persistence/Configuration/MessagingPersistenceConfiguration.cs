using Messaging.Application.Contracts;
using Messaging.Persistence.Data;
using Messaging.Persistence.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Messaging.Persistence.Configuration;

public static class MessagingPersistenceConfiguration
{
    public static IServiceCollection AddMessagingPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<MessagingDbContext>(options =>
        {
            //TODO: Add the connection string
        });

        services.AddScoped<IUserRepository, UserRepository>();

        return services;
    }
}