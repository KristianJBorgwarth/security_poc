using MediatR;
using Messaging.Domain.Common;

namespace Messaging.Application.Features.PreKey.Queries.GetPreKeyBundle;

public sealed record GetPreKeyBundleQuery(Guid UserId) : IRequest<Result<GetPreKeyBundleQueryDto>>;