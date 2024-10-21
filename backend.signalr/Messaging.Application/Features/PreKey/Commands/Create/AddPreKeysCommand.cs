using System.Windows.Input;
using MediatR;
using Messaging.Domain.Common;

namespace Messaging.Application.Features.PreKey.Commands.Create;

public sealed record AddPreKeysCommand : IRequest<Result>
{
    public required Guid UserId { get; init; }
    public required IEnumerable<PreKeyRequestDto> PreKeys { get; init; }
}