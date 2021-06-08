using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WEB2_Backend.Database.Context;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Model;

namespace WEB2_Backend.Service.Login
{
    public class LoginService 
    {
        //private UserManager<AuthentificationUser> manager;
        private IUnitOfWork unitOfWork;
        private AppSettings appSettings;
        TokenService tokenService;

        public LoginService(AppSettings appSettings, IUnitOfWork unitOfWork)
        {
            //this.manager = manager;
            this.appSettings = appSettings;
            tokenService = new TokenService();
            this.unitOfWork = unitOfWork;
        }

        public async Task<string[]> Login(string username, string password)
        {
            string[] ret;
            User loginUser = checkUser(username, password);

            if (loginUser != null)
            {
                if (loginUser.isActive)
                {
                    /*var role = await manager.GetRolesAsync(user);
                    if (role.First() == "User" && !(await manager.IsEmailConfirmedAsync(user)))
                        return "";*/

                    string token = tokenService.generateToken(loginUser, this.appSettings);
                    ret = new string[] { token, loginUser.UserT.ToString() };
                }
                else
                    ret = new string[] { "Error", "The account is not active." };

                return ret;
            }
            else
            {
                ret = new string[] { "Error", "Username or password is incorrect." };
                return ret;

            }

        }

        private User checkUser(string username, string password)
        {
            var AllUser = unitOfWork.UserRepository.GetAll();
            foreach (var temp in AllUser)
            {
                if (temp.Username == username && temp.Password == password)
                    return temp;
            }
            return null;
        }
    }
}
