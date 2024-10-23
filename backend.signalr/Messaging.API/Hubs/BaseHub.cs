using Messaging.Application.Features.Connection;
using Microsoft.AspNetCore.SignalR;

namespace Messaging.API.Hubs;

public abstract class BaseHub : Hub
{
    protected readonly IConnectionHandler ConnectionHandler;
    
    protected BaseHub(IConnectionHandler connectionHandler)
    {
        ConnectionHandler = connectionHandler;
    }
    
    public override Task OnConnectedAsync()
    {
        var identifier = Context.GetHttpContext()?.Request.Query["user"].ToString();
        if(identifier is null)
        {
            return base.OnConnectedAsync();
        }
        ConnectionHandler.RegisterConnection(Guid  .Parse(identifier), Context.ConnectionId);
        return base.OnConnectedAsync();
    }
    
    public override Task OnDisconnectedAsync(Exception? exception)
    {
        ConnectionHandler.RemoveConnection(Context.ConnectionId);   
        return base.OnDisconnectedAsync(exception);
    }
}