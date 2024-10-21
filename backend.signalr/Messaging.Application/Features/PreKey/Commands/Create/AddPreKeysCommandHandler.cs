using MediatR;
using Messaging.Application.Contracts;
using Messaging.Domain.Common;
using Microsoft.Extensions.Logging;

namespace Messaging.Application.Features.PreKey.Commands.Create;

public sealed class AddPreKeysCommandHandler(
    IUserRepository userRepository,
    IUnitOfWork uow,
    ILogger<AddPreKeysCommandHandler> logger) 
    : IRequestHandler<AddPreKeysCommand, Result> 
{
    public async Task<Result> Handle(AddPreKeysCommand request, CancellationToken cancellationToken)
    {
        try
        {
            var user = await userRepository.GetByIdAsync(request.UserId);
            if (user is null)
            {
                logger.LogError("User with ID {UserId} not found", request.UserId);
                return Result.Fail(Errors.General.NotFound(request.UserId));
            }
            
            foreach (var preKey in request.PreKeys)
            {
                user.AddPreKey(preKey.KeyId, preKey.PublicKey, preKey.Signature, preKey.KeyType);
            }
            
            await uow.SaveChangesAsync(cancellationToken);
                
            return Result.Ok();
        }
        catch (Exception e)
        {
            logger.LogError(e, "Error occurred while adding PreKeys for user {UserId}", request.UserId);
            return Result.Fail(Errors.General.UnspecifiedError("An exception occured while attempting to add PreKeys"));
        }
    }
}