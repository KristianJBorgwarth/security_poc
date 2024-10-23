namespace Messaging.Application.Features.Connection;

public class ConnectionHandler : IConnectionHandler
{
    private readonly Dictionary<Guid, string> _connections = new();
    public void RegisterConnection(Guid userId, string connectionId)
    {
        _connections[userId] = connectionId;
    }
    
    public void RemoveConnection(string connectionId)
    {
        var key = _connections.FirstOrDefault(x => x.Value == connectionId).Key;
        if(key != Guid.Empty)
        {
            _connections.Remove(key);
        }
    }

    public string? GetConnectionId(Guid userId)
    {
        return _connections.GetValueOrDefault(userId);
    }
}