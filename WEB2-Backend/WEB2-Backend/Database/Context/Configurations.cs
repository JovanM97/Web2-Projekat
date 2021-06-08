using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2_Backend.Model;

namespace WEB2_Backend.Database.Context
{
    public static class Configurations
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            var User1 = new User()
            {
                Id = 1,
                Username = "AdminJovan",
                Name = "Jovan",
                LastName = "Miljkovic",
                Email = "godlike.jovan@gmail.com",
                Password = "jovan123",
                Address = "Novi Sad",
                UserT = UserType.ADMIN,
                Image = "",
                Birthday = new DateTime(1997, 3, 11),
                isActive = true,
                IsDeleted = false
            };
            var User2 = new User()
            {
                Id = 2,
                Username = "DispatcherDzin",
                Name = "Srdjan",
                LastName = "Dzinovic",
                Email = "srdjandzinovic97@gmail.com",
                Password = "dzin123",
                Address = "Novi Sad",
                UserT = UserType.DISPATCHER,
                Image = "",
                Birthday = new DateTime(1997, 1, 4),
                isActive = true,
                IsDeleted = false
            };
            var User3 = new User()
            {
                Id = 3,
                Username = "WorkerJovan",
                Name = "Jovan",
                LastName = "Miljkovic",
                Email = "joci.miljkovic@gmail.com",
                Password = "jovan123",
                Address = "Novi Sad",
                UserT = UserType.ATH_WORKER,
                Image = "",
                Birthday = new DateTime(1997, 3, 11),
                isActive = true,
                IsDeleted = false
            };
            var User4 = new User()
            {
                Id = 4,
                Username = "CrewDejan",
                Name = "Dejan",
                LastName = "Bozic",
                Email = "dejanbozic@gmail.com",
                Password = "dejan123",
                Address = "Novi Sad",
                UserT = UserType.CREW_MEMEBER,
                Image = "",
                Birthday = new DateTime(1994, 1, 1),
                isActive = true,
                IsDeleted = false
            };

            modelBuilder.Entity<User>().HasData(
               User1, User2, User3, User4
           );

        }
    }
}
