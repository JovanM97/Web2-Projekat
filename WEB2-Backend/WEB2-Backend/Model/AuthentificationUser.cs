using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2_Backend.Model
{
    public class AuthentificationUser : IdentityUser
    {
        public bool IsPasswordOk { get; set; }
        public AuthentificationUser() : base() { }
        public AuthentificationUser(string username) : base(username) { }
    }
}
