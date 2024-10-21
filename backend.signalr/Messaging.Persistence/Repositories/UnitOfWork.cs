using Messaging.Application.Contracts;
using Messaging.Domain.Abstracts;
using Messaging.Persistence.Data;
using Microsoft.EntityFrameworkCore;

namespace Messaging.Persistence.Repositories;

public class UnitOfWork(MessagingDbContext ctx) : IUnitOfWork
{
    public async Task SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        UpdateAuditableEntities();
        await ctx.SaveChangesAsync(cancellationToken);
    }
    
    /// <summary>
    /// Updates the Created and LastModified timestamps for auditable entities.
    /// </summary>
    private void UpdateAuditableEntities()
    {
        var entities = ctx.ChangeTracker.Entries<Entity>().Where(e=> e.State is EntityState.Added or EntityState.Modified);

        foreach (var entity in entities)
        {
            if (entity.State is EntityState.Added)
            {
                entity.Entity.SetCreatedTime();
            }

            entity.Entity.SetUpdatedTime();
        }
    }
}