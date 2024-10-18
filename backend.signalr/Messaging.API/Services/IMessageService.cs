namespace Messaging.API.Services;

public interface IMessageService
{
    public Task SendMessageAsync(string user, string message);
}