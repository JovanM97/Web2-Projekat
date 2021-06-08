using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Model;

namespace WEB2_Backend.Service.Account
{
    public class AccountService
    {
        private IUnitOfWork unitOfWork;
        private ValidateService validateService = new ValidateService();
        private readonly string Success = "Success";
        public AccountService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }
        public User CheckEmailForUser(string email)
        {
            User ret = null;
            try
            {
                ret = unitOfWork.UserRepository.GetAll().Where(U => U.Email == email)?.First();
            }
            catch
            {
                return null;
            }
            return ret;

        }

    }
}
