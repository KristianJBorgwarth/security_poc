using Messaging.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Messaging.Persistence.ModelConfigurations;

public class PreKeyModelConfiguration : IEntityTypeConfiguration<PreKey>
{
    public void Configure(EntityTypeBuilder<PreKey> builder)
    {
        builder.ToTable("PreKey");

        builder.HasKey(pk => pk.Id);

        builder.Property(pk => pk.Id)
            .ValueGeneratedNever();

        builder.Property(pk => pk.PublicKey)
            .IsRequired();

        builder.Property(pk => pk.KeyType)
            .HasConversion<string>()
            .IsRequired();

        builder.Property(pk => pk.IsUsed)
            .IsRequired();

        builder.HasOne(pk => pk.User)
            .WithMany(u => u.PreKeys)
            .IsRequired();
    }
}