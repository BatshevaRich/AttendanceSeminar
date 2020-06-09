using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using common;
using bll;


namespace myApi.Controllers
{
    public class SubjectController : ApiController
    {
        // GET: api/Subject
        [Route("api/getAllSubjects")]
        public List<subjectToClass> Get()
        {
            return MangerSubject.GetSubjects();
        }

        // GET: api/Subject/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Subject
        [Route("api/addSubject")]
        public void Post([FromBody]subjectToClass value)
        {
            MangerSubject.addSubject(value);
        }

        // PUT: api/Subject/5
        [Route("api/updateSubject")]
        public void Put([FromBody]subjectToClass value)
        {
            MangerSubject.Update(value);
        }

        // DELETE: api/Subject/5
        [Route("api/removeSubject/{id}")]
        public void Delete([FromUri] int id)
        {
            MangerSubject.remove(id);
        }
    }
}
