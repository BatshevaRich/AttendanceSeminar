using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using common;
using bll;
using System.Web.Routing;

namespace myApi.Controllers
{
    public class SchduleController : ApiController
    {
        // GET: api/Schdule
       [ Route("api/getAllSchedules")]
        public List<Schedule> Get()
        {
        return  MangerSchedule.GetSchedules();
             
        }

        // GET: api/Schdule/5
        public string Get(int id)
        {
            return "value";
        }
        [Route("api/addSchdule")]
        // POST: api/Schdule
        public void Post([FromBody]Schedule s)
        {
            MangerSchedule.add(s);
        }

        // PUT: api/Schdule/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Schdule/5
        public void Delete(int id)
        {
        }
    }
}
