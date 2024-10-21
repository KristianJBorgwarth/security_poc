using MediatR;
using Messaging.API.Services;
using Messaging.Application.Features.PreKey.Commands.Create;
using Messaging.Domain.Common;
using Microsoft.AspNetCore.SignalR;
using SignalRSwaggerGen.Attributes;

namespace Messaging.API.Hubs;

[SignalRHub]
public class MessageHub(
    ISender sender,
    IMessageService messageService)
    : Hub
{
    private static Dictionary<string, string> _connections = new();

    [SignalRMethod]
    public async Task SendMessageAsync(string user, string message)
    {
        Console.WriteLine("Sending message to user: " + user);
        if (_connections.TryGetValue(user, out var connectionId))
        {
            await messageService.SendMessageAsync(connectionId, message);
        }
    }

    [SignalRMethod]
    public async Task<Result> UploadPreKeysAsync(AddPreKeysCommand cmd)
    {
        var result = await sender.Send(cmd);
        return result;
    }

    public override Task OnConnectedAsync()
    {
        var identifier = Context.GetHttpContext().Request.Query["user"];
        _connections[identifier] = Context.ConnectionId;
        return base.OnConnectedAsync();
    }

    public override Task OnDisconnectedAsync(Exception? exception)
    {
        var identifier = _connections.FirstOrDefault(x => x.Value == Context.ConnectionId).Key;
        if (identifier != null)
        {
            _connections.Remove(identifier);
        }

        return base.OnDisconnectedAsync(exception);
    }
}