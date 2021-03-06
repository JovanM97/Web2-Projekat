using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WEB2_Backend.Database.Interface;
using WEB2_Backend.Model;
using WEB2_Backend.Service.Account;

namespace WEB2_Backend.Service.Equipment
{
    public class EquipmentService
    {
        IUnitOfWork unitOfWork;
        IEquipmentRepository repo;
        ValidateService validateService;

        public EquipmentService( IUnitOfWork UOW)
        {
            unitOfWork = UOW;
            //repo = _repo;
            validateService = new ValidateService();
        }

        internal bool AddEquipment(Model.Equipment data)
        {
            if (data == null)
                return false;
            if (!validateService.ValidateEquipment(data))
                return false;

            int realId = CheckId();

            var temp = new Model.Equipment()
            {
                //Id = realId,
                EqType = data.EqType,
                Name = data.Name,
                Address = data.Address,
                Coordinates = data.Coordinates,
                isDeleted = false
            };

            unitOfWork.EquipmentRepository.Add(temp);
            return true;
        }

        internal ICollection<Model.EquipmentResponse> GetAllEquipment()
        {
            ICollection<Model.Equipment> ret = null;
            List<Model.EquipmentResponse> ret2 = new List<EquipmentResponse>();
            ret = unitOfWork.EquipmentRepository.GetAll().ToList();
            if (ret == null)
                return null;
            else
            {
                foreach (var item in ret)
                {
                    EquipmentResponse er = new EquipmentResponse()
                    {
                        Id = item.Id,
                        Name = item.Name,
                        EqType = item.EqType.ToString(),
                        Address = item.Address,
                        Coordinates = item.Coordinates
                    };
                    ret2.Add(er);
                }
                return ret2;
            }
        }

        internal int CheckId()
        {
            var allEquipment = unitOfWork.EquipmentRepository.GetAll();
            int id = allEquipment.Count() + 1;
            return id;
        }
    }
}
