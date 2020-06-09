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
    public class TeacherController : ApiController
    {
        [Route("api/getAllTeachers")]
        // GET: api/Teacher
        public List<dal.Teacher> Get()
        {
            return TeacherManager.GetTeachers();

        }

        // GET: api/Teacher/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Teacher
        [Route("api/addTeacher")]
        public void Post([FromBody]dal.Teacher value)
        {
            TeacherManager.addTeacher(value);
        }
        [Route("api/updateTeacher")]
        // PUT: api/Teacher/5
        public void Put([FromBody]common.Teacher teacher)
        {
            TeacherManager.Update(teacher);
        }

        // DELETE: api/Teacher/5
        [Route("api/removeTeacher/{id}")]
        public void Delete([FromUri]int id)
        {
            TeacherManager.remove(id);
        }
    }
}
