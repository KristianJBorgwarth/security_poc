using MediatR;
using Messaging.API.Services;
using Messaging.Application.Features.Connection;
using Messaging.Application.Features.PreKey.Commands.Create;
using Messaging.Application.Features.PreKey.Queries.GetPreKeyBundle;
using Messaging.Domain.Common;
using SignalRSwaggerGen.Attributes;

namespace Messaging.API.Hubs;

[SignalRHub]
public class MessageHub : BaseHub
{
    private readonly IMessageService _messageService;
    private readonly ISender _sender;
    
    public MessageHub(
        ISender sender, 
        IMessageService messageService, 
        IConnectionHandler connectionHandler) 
        : base(connectionHandler)
    {
        _sender = sender;
        _messageService = messageService;
    }

    [SignalRMethod]
    public async Task SendMessageAsync(string user, string message)
    {
        var connection = ConnectionHandler.GetConnectionId(Guid.Parse(user));
        
        if(connection != null)
        {
            await _messageService.SendMessageAsync(connection, message);
        }
        else
        {
            Console.WriteLine("User not found");
        }
    }

    [SignalRMethod]
    public async Task<Result> UploadPreKeysAsync(AddPreKeysCommand cmd)
    {
        var result = await _sender.Send(cmd);
        return result;
    }
    
    [SignalRMethod]
    public async Task<Result> GetPreyKeyBundleAsync(GetPreKeyBundleQuery query)
    {
        var result = await _sender.Send(query);
        return result;
    }
}