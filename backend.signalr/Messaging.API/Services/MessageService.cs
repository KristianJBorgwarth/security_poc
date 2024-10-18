using Messaging.API.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace Messaging.API.Services;

public class MessageService : IMessageService
{
    private readonly IHubContext<MessageHub> _hub;

    public MessageService(IHubContext<MessageHub> hub)
    {
        _hub = hub;
    }

    public async Task SendMessageAsync(string user, string message)
    {
        await _hub.Clients.Client(user).SendAsync("ReceiveMessage", message);
    }
}