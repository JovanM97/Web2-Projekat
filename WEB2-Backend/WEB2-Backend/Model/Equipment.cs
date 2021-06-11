using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2_Backend.Model
{
    public enum EquipmentType
    {
        SWITCH,
        FUSE,
        TRANSFORMER,
        DISCONNECTOR
    }


    public class Equipment
    {
        [Key]
        public int Id { get; set; }
        public EquipmentType EqType { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Coordinates { get; set; }
        public bool isDeleted { get; set; }

        public Equipment() { }
    }
}
