namespace Messaging.Application.Features.PreKey.Queries.GetPreKeyBundle;

public sealed record GetPreKeyBundleQueryDto()
{
    public Guid UserId { get; init; }
    public required byte[] IdentityPublicKey { get; init; }
    public required byte[] SignedPreKey { get; init; }
    public required byte[] SignedPreKeySignature { get; init; }
    public int? OneTimePreKeyId { get; init; }
    public byte[]? OneTimePreKey { get; init; }
}