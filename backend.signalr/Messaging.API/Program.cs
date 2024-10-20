using Messaging.API.Hubs;
using Messaging.API.Services;

var builder = WebApplication.CreateBuilder(args);

#region SignalR
builder.Services.AddSignalR();
#endregion

#region MessageService

//TODO: Consider creating a singleton service for the message service to avoid creating a new instance of the service for each request
builder.Services.AddScoped<IMessageService, MessageService>();

#endregion

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new() { Title = "Messaging.API", Version = "v1" });
    c.AddSignalRSwaggerGen();
});



var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapHub<MessageHub>("/messageHub");

app.UseHttpsRedirection();


app.Run();