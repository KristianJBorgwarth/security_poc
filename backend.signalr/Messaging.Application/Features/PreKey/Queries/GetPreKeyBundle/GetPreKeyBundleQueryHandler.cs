using System.Data;
using MediatR;
using Messaging.Application.Contracts;
using Messaging.Domain.Common;
using Microsoft.Extensions.Logging;

namespace Messaging.Application.Features.PreKey.Queries.GetPreKeyBundle;

public class GetPreKeyBundleQueryHandler(
    IUserRepository userRepository,
    ILogger<GetPreKeyBundleQueryHandler> logger) 
    : IRequestHandler<GetPreKeyBundleQuery, Result<GetPreKeyBundleQueryDto>>
{
    public async Task<Result<GetPreKeyBundleQueryDto>> Handle(GetPreKeyBundleQuery request, CancellationToken cancellationToken)
    {
        try
        {
            throw new RowNotInTableException();
        }
        catch (Exception e)
        {
            logger.LogError(e, "Error occurred while getting PreKey bundle for user {UserId}", request.UserId);
            return Result.Fail<GetPreKeyBundleQueryDto>(
                Errors.General.UnspecifiedError("An exception occured while attempting to get PreKey bundle"));
        }
    }
}