using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WEB2_Backend.Database.Context;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Model;
using WEB2_Backend.Service.Account;

namespace WEB2_Backend.Service.Login
{
    public class LoginService 
    {
        //private UserManager<AuthentificationUser> manager;
        private IUnitOfWork unitOfWork;
        private AppSettings appSettings;
        TokenService tokenService;
        ValidateService validateService;

        public LoginService(AppSettings appSettings, IUnitOfWork unitOfWork)
        {
            //this.manager = manager;
            this.appSettings = appSettings;
            tokenService = new TokenService();
            this.unitOfWork = unitOfWork;
            validateService = new ValidateService();
        }

        public async Task<string[]> Login(string email, string password)
        {
            string[] ret;
            if (!validateService.ValidateEmail(email))
            {
                ret = new string[] { "Error", "Email format is incorrect." };
                return ret;
            }
            User loginUser = checkUser(email, password);

            if (loginUser != null)
            {
                if (loginUser.isActive)
                {
                    /*var role = await manager.GetRolesAsync(user);
                    if (role.First() == "User" && !(await manager.IsEmailConfirmedAsync(user)))
                        return "";*/

                    string token = tokenService.generateToken(loginUser, this.appSettings);
                    ret = new string[] { token, loginUser.UserT.ToString(), loginUser.Username };
                }
                else
                    ret = new string[] { "Error", "The account is not active." };

                return ret;
            }
            else
            {
                ret = new string[] { "Error", "Email or password is incorrect." };
                return ret;

            }

        }

        private User checkUser(string email, string password)
        {
            var AllUser = unitOfWork.UserRepository.GetAll();
            foreach (var temp in AllUser)
            {
                if (temp.Email == email && temp.Password == password)
                    return temp;
            }
            return null;
        }
    }
}
