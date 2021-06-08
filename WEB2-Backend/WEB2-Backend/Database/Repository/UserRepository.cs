using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2_Backend.Database.Context;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Model;

namespace WEB2_Backend.Database.Repository
{
    public class UserRepository : Repository<User, int>, IUserRepository
    {
        public UserRepository(AppDbContext context) : base(context) { }

    }
}
