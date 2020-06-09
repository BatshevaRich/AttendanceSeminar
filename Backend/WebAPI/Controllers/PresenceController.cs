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
    public class PresenceController : ApiController
    {
        // GET: api/Presence
        [Route("api/getReport")]
        public List<common.Dictionary> Get()
        {
            List<common.Dictionary> dictionaries = new List<Dictionary>(); ;
            var p = PreseneManger.getInfoForResponce();
           // common.Dictionary dictionary;
            foreach (var item in p)
            {
                dictionaries.Add(new Dictionary() {Teacher=item.Key,Arr=item.Value });
            }
            return dictionaries;
        }

        // GET: api/Presence/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Presence
        [Route("api/addPresnce")]
        public void Post([FromBody]Presence value)
        {
            PreseneManger.AddPresence(value);
        }

        // PUT: api/Presence/5
        [Route("api/updatePresence")]
        public void Put(int id, [FromBody]int codeTachar, int code, int hour, DateTime date, int day, int statusToDay)
        {

            PreseneManger.Update(codeTachar, code, hour, date, day, statusToDay);
        }

        // DELETE: api/Presence/5
        public void Delete(int id)
        {

        }
    }
}
