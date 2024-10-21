using MediatR;

namespace Messaging.Application.Features.User.Queries.GetUser;

public sealed record GetUserQuery(Guid ConnectionId) : IRequest<GetUserQueryDto>;