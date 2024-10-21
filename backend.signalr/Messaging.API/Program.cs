using System.Reflection;
using Messaging.API.Hubs;
using Messaging.API.Services;
using Messaging.Application.Configuration;
using Messaging.Persistence.Configuration;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

#region Configuration

var env = builder.Environment;

var configuration = builder.Configuration;
configuration
    .AddJsonFile("appsettings.json", false, true)
    .AddEnvironmentVariables();

if (env.IsDevelopment())
{
    configuration.AddJsonFile($"appsettings.{Environments.Development}.json", true, true);
    configuration.AddUserSecrets(Assembly.GetExecutingAssembly(), true);
}
#endregion

#region Logger

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(configuration)
    .CreateLogger();

builder.Host.UseSerilog();

#endregion


#region SignalR
builder.Services.AddSignalR();
#endregion

#region MessageService

//TODO: Consider creating a singleton service for the message service to avoid creating a new instance of the service for each request
builder.Services.AddScoped<IMessageService, MessageService>();

#endregion

#region Application Configuration

builder.Services.AddApplication();

#endregion


#region Persistence Configuration

builder.Services.AddPersistence(builder.Configuration);

#endregion

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Messaging.API", Version = "v1" });
    c.AddSignalRSwaggerGen();
});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", builder =>
    {
        builder
            .WithOrigins("http://localhost:8080")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Enable CORS middleware
app.UseCors("AllowFrontend");

app.MapHub<MessageHub>("/messageHub");

app.Run();
