using System.Reflection;
using FluentValidation;
using MediatR;
using Messaging.Application.Behavior;
using Microsoft.Extensions.DependencyInjection;

namespace Messaging.Application.Configuration;

public static class MessagingApplicationConfiguration
{
    private static readonly Assembly Assembly = Assembly.GetExecutingAssembly();
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddValidatorsFromAssembly(Assembly);
        services.AddMediatR(cfg =>
        {
            cfg.RegisterServicesFromAssembly(Assembly);
        });
        services.AddTransient(typeof(IPipelineBehavior<,>), typeof(ValidationBehavior<,>));
        return services;
    }
}