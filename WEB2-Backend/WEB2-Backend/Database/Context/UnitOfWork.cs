using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Database.Repository;

namespace WEB2_Backend.Database.Context
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly AppDbContext _context;

        public UserRepository UserRepository { get; set; }
        public EquipmentRepository EquipmentRepository { get; set; }

        public UnitOfWork(AppDbContext options)
        {
            _context = options;
            UserRepository = new UserRepository(_context);
            EquipmentRepository = new EquipmentRepository(_context);
        }



        public int Complete()
        {
            return _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
