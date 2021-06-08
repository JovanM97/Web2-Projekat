using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.VisualStudio.Web.CodeGeneration.Contracts.Messaging;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Model;
using WEB2_Backend.Service.Login;

namespace WEB2_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Angular")]
    public class LoginController : ControllerBase
    {
        LoginService service;
        IUnitOfWork unitOfWork;
        private readonly AppSettings _appSettings;
        public IConfiguration Configuration { get; }

        public LoginController( IUnitOfWork repo, IConfiguration configuration)
        {
            unitOfWork = repo;
            this.Configuration = configuration;
            _appSettings = new AppSettings();
            _appSettings.JWT_Secret = Configuration["ApplicationSettings:JWT_Secret"].ToString();
            _appSettings.Client_URL = Configuration["ApplicationSettings:Client_URL"].ToString();
            this.service = new LoginService(_appSettings, unitOfWork);

        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody]LoginResource credentials)
        {
            //if (!ModelState.IsValid)
            //    return BadRequest(new { message = "Username and password have to be supplied" });

            //if (string.IsNullOrWhiteSpace(credentials.Username))
            //    return BadRequest(new { message = "Username not supplied" });
            //if (string.IsNullOrWhiteSpace(credentials.Password))
            //    return BadRequest(new { message = "Password not supplied" });

            String[] retVal = await service.Login(credentials.Username, credentials.Password);
            String token = retVal[0];
            String msg = retVal[1];

            if (!token.Equals("Error"))
            {
                return Ok(new { token, msg });
            }
            else
            {
                return BadRequest(new { token, msg });
            }

        }
    }
}