using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2_Backend.Model;

namespace WEB2_Backend.Database.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Equipment> Equipments { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Seed();
            //base.OnModelCreating(builder);
            //builder.Entity<User>().HasKey(i => i.Username);
        }
    }
}
