using common;
using bll;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace myApi.Controllers
{
    public class TecherController : ApiController
    {
        [Route("api/getAllTeachers")]
        // GET: api/Techer
        public List<Teacher> Get()
        {
            return bll.TecherManger.GetTeachers();

        }

        // GET: api/Techer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Techer
        [Route("api/addTeacher")]
        public void Post([FromBody]Teacher value)
        {
            TecherManger.addTecher(value);
        }
        [Route("api/updateTeacher")]
        // PUT: api/Techer/5
        public void Put([FromBody]common.Teacher teacher)
        {
            TecherManger.Update(teacher);
        }

        // DELETE: api/Techer/5
        [Route("api/removeTeacher/{id}")]
        public void Delete([FromUri]int id)
        {
            TecherManger.remove(id);
        }
    }
}
