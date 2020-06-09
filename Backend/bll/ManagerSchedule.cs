using dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public class ManagerSchedule
    {

        public static List<common.Schedule> GetSchedules()
        {
           var a= schedule.get();
            var s = new List<common.Schedule>();
            foreach (var item in a)
            {
                common.Schedule i = Mapper.Casting(item);
                s.Add(i);
            }
            return s;
        }
        public static void add(common.Schedule s)
        {
            
            schedule.add(s);
        }
        public static void selectBySubject(int subject)
        {

            schedule.selectBySubject(subject);
        }
        public static void selectByClass(int clss)
        {
            schedule.selectByClass(clss);
        }

    }
}
