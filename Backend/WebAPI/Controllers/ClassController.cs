using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using common;
using bll;
using System.Web.Http;

namespace myApi.Controllers
{
    public class ClassController : ApiController
    {
        
        // GET: api/Class
        [Route("api/getAllClasses")]
        public List<Class1>  Get()
        {
            return ManegerClasses.getList(); 
        }

        // GET: api/Class/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Class
        [Route("api/addClass")]
        public void Post([FromBody]Class1 value)
        {
            ManegerClasses.addClass(value);
        }

        // PUT: api/Class/5
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/Class/5
        [Route("api/removeClass/{id}")]
        public void Delete([FromUri]int id)
        {
            ManegerClasses.remove(id);
        }
    }
}
