using Messaging.Domain.Enums;

namespace Messaging.Application.Features.PreKey.Commands.Create;

public sealed record PreKeyRequestDto(int KeyId, byte[] PublicKey, byte[]? Signature, PreKeyType KeyType);