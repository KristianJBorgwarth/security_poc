namespace Messaging.Domain.Abstracts;

public abstract class Entity
{
    public Guid Id { get; protected init; }
    public DateTime CreatedAt { get; private set; }
    public DateTime UpdatedAt { get; private set; }

    public void SetCreatedTime() => CreatedAt = DateTime.UtcNow;
    
    public void SetUpdatedTime() => UpdatedAt = DateTime.UtcNow;
}