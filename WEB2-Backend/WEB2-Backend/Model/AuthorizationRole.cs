using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2_Backend.Model
{
    public class AuthorizationRole : IdentityRole
    {
        public string Description { get; set; }

        public AuthorizationRole() : base() { }

        public AuthorizationRole(string roleName) : base(roleName) { }
    }
}
