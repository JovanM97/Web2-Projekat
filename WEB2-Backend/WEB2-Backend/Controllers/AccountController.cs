using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Service.Account;

namespace WEB2_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Angular")]
    public class AccountController : ControllerBase
    {
        AccountService Service;
        public AccountController(IUnitOfWork repo)
        {
            Service = new AccountService(repo);
        }

        [HttpGet]
        [Route("checkToken")]
        public bool checkToken()
        {
            if (User.Identity.IsAuthenticated)
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                }
                return true; ;
            }
            else
            {
                return false;
            }

        }
    }
}