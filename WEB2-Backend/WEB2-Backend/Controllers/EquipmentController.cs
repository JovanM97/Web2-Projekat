using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Model;
using WEB2_Backend.Service.Equipment;

namespace WEB2_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("Angular")]
    public class EquipmentController : ControllerBase
    {
        EquipmentService service;

        public EquipmentController(IUnitOfWork UOW)
        {
            service = new EquipmentService(UOW);
        }

        [HttpGet]
        [Route("GetAllEquipment")]
        public ICollection<EquipmentResponse> GetAllEquipment()
        {
            return service.GetAllEquipment();
        }

        [HttpPost]
        //[Authorize]
        [Route("AddEquipment")]
        //POST : /api/Equipment/AddEquipment
        public async Task<IActionResult> AddEquipment(Equipment EquipmentData)
        {
            if (service.AddEquipment(EquipmentData))
            {
                String token = "success";
                return Ok(new { token });

            }
            else
            {
                String token = "Error";
                return BadRequest( new { token });
            }
        }

        [HttpGet]
        //[Authorize]
        [Route("CheckId")]
        //POST : /api/Equipment/CheckId
        public int CheckId()
        {
            return service.CheckId();
        }
    }
}