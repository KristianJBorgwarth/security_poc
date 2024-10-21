using System.Reflection;
using Messaging.Application.Contracts;
using Messaging.Persistence.Data;
using Messaging.Persistence.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Messaging.Persistence.Configuration;

public static class MessagingPersistenceConfiguration
{
    private const string ConnectionStringName = "ChatServerDbConnectionString";
    public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<MessagingDbContext>(options =>
        {
            options.UseNpgsql(configuration.GetConnectionString(ConnectionStringName),
                b => b.MigrationsAssembly(Assembly.GetExecutingAssembly()));
        });

        services.AddScoped<IUserRepository, UserRepository>();
        services.AddScoped<IUnitOfWork, UnitOfWork>();

        return services;
    }
}