using Microsoft.EntityFrameworkCore;
using Server_YAD2.Models;

namespace Server_YAD2.Data
{
    public class ApplicationDbContext : DbContext
    {
       public virtual DbSet<Product> Products { get; set; }
       public virtual DbSet<Owner> Owners { get; set; }


       public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    }
}
