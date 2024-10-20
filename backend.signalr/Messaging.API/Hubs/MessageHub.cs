using Messaging.API.Services;
using Microsoft.AspNetCore.SignalR;
using SignalRSwaggerGen.Attributes;

namespace Messaging.API.Hubs;

[SignalRHub]
public class MessageHub(IMessageService messageService) : Hub
{
    private static Dictionary<string, string> _connections = new();

    [SignalRMethod]
    public async Task SendMessageAsync(string user, string message)
    {
        if (_connections.TryGetValue(user, out var connectionId))
        {
            await messageService.SendMessageAsync(connectionId, message);
        }
    }

    public override Task OnConnectedAsync()
    {
        var identifier = Context.GetHttpContext().Request.Query["user"];
        _connections[identifier] = Context.ConnectionId;
        return base.OnConnectedAsync();
    }

    public override Task OnDisconnectedAsync(Exception? exception)
    {
        var identifier = _connections.FirstOrDefault(x=> x.Value == Context.ConnectionId).Key;
        if(identifier != null)
        {
            _connections.Remove(identifier);
        }
        return base.OnDisconnectedAsync(exception);
    }
}