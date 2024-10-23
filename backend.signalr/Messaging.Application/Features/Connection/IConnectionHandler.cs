namespace Messaging.Application.Features.Connection;

public interface IConnectionHandler
{
    void RegisterConnection(Guid userId, string connectionId);
    void RemoveConnection(string connectionId);
    string? GetConnectionId(Guid userId);
}