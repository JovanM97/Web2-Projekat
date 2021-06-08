using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2_Backend.Model
{
    public enum UserType
    {
        CREW_MEMEBER,
        DISPATCHER,
        ATH_WORKER,
        ADMIN
    }


    public class User 
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Image { get; set; }
        public DateTime Birthday { get; set; }
        public UserType UserT { get; set; }
        public bool isActive { get; set; }
        public bool IsDeleted { get; set; }


        public User() { }
    }
}
