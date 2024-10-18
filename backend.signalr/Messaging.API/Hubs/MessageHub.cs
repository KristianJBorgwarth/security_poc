using Messaging.API.Services;
using Microsoft.AspNetCore.SignalR;
using SignalRSwaggerGen.Attributes;

namespace Messaging.API.Hubs;

[SignalRHub]
public class MessageHub(IMessageService messageService) : Hub
{
    [SignalRMethod]
    public async Task SendMessageAsync(string user, string message)
    {
        await messageService.SendMessageAsync(user, message);
    }
}