using System.Collections.ObjectModel;
using Messaging.Domain.Abstracts;

namespace Messaging.Domain.Entities;

public class User : Entity
{
    public Guid ConnectionId { get; init; }
    public byte[] IdentityPublicKey { get; init; }
    private readonly List<PreKey> _preKeys = [];
    public ReadOnlyCollection<PreKey> PreKeys => _preKeys.AsReadOnly();

    public User(Guid id, Guid connectionId ,byte[] identityPublicKey)
    {
        Id = id;
        ConnectionId = connectionId;
        IdentityPublicKey = identityPublicKey;
    }

    public void AddPreKey(PreKey preKey)
    {
        _preKeys.Add(preKey);
    }

    public void RemovePreKey(PreKey preKey)
    {
        _preKeys.Remove(preKey);
    }

    public void ClearPreKeys()
    {
        _preKeys.Clear();
    }

}