using MediatR;

namespace Messaging.Application.Features.User.Queries.GetUser;

public class GetUserQueryHandler : IRequestHandler<GetUserQuery, GetUserQueryDto>
{
    public Task<GetUserQueryDto> Handle(GetUserQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}