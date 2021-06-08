using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WEB2_Backend.Model.Response
{
    public class Response<T>
    {
        public bool Success { get; private set; }
        public string Message { get; private set; }
        public T Resource { get; private set; }

        protected Response(T resource)
        {
            Success = true;
            Message = string.Empty;
            Resource = resource;
        }

        protected Response(string message)
        {
            Success = false;
            Message = message;
            Resource = default;
        }
    }
}
