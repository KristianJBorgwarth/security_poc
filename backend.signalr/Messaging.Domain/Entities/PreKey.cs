using Messaging.Domain.Abstracts;
using Messaging.Domain.Enums;

namespace Messaging.Domain.Entities;

public class PreKey : Entity
{
    public int KeyId { get; init; }
    public byte[] PublicKey { get; init; }
    public byte[]? Signature { get; init; }
    public PreKeyType KeyType { get; init; }
    public bool IsUsed { get; private set; }
    public Guid UserId { get; init; }
    public User User { get; set; } = null!;

    public PreKey(int keyId, byte[] publicKey, byte[]? signature, PreKeyType keyType, bool isUsed, Guid userId)
    {
        Id = Guid.NewGuid();
        KeyId = keyId;
        PublicKey = publicKey;
        Signature = signature;
        KeyType = keyType;
        IsUsed = isUsed;
        UserId = userId;
    }

    public void MarkAsUsed()
    {
        IsUsed = true;
    }
}