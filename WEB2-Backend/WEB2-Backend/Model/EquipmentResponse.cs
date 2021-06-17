using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2_Backend.Model
{
    public class EquipmentResponse
    {
        public int Id { get; set; }
        public string EqType { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Coordinates { get; set; }
    }
}
