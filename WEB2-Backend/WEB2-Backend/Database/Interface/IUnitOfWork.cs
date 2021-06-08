using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2_Backend.Database.Repository;

namespace WEB2_Backend.Database.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        UserRepository UserRepository { get; }


        int Complete();
    }
}
