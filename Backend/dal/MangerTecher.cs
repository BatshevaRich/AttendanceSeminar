using common;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI.WebControls;

namespace dal
{
    public partial class techer
    {
        public static void Add(Teacher t)
        {
            techer techer = Mapper.Casting(t);
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                try
                {
                    sqlEntities.techer.Add(techer);
                }
                catch (Exception e) { }
               //{("אין אפשרות להוסיף" + " אנא בדקי את הערכים שהכנסת"); }
                sqlEntities.SaveChanges();
            }
        }

        public static void Rename(int id)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.techer.Where(z => z.codeTecher == id).First();
               
                //var users = s.schedule.ToList();
                //var presence = s.Presence.ToList();
                //if (users != null)
                //{

                //    foreach (var user in users)
                //    {

                //        s.schedule.Remove(user);
                //    }
                //}
                //if (presence != null)
                //{
                //    foreach (var p in presence)
                //    {
                //        s.Presence.Remove(p);
                //    }
                //}
                if (s != null)
                {

                    try
                    {
                        var schedules = sqlEntities.schedules.Where(z => z.techer == id).ToList();
                        var p = sqlEntities.Presence.Where(z => z.codeTecher == id).ToList();
                        schedules.ForEach(s1 => s1.techer1 = null);
                        p.ForEach(p1 => p1.techer = null);
                        sqlEntities.techer.Remove(s);
                        sqlEntities.SaveChanges();
                    }
                    catch (NullReferenceException)
                    {


                    }
                }
            }
        }
        public static void Update(common.Teacher t)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.techer.Where(z => z.codeTecher == t.CodeTeacher).First();
                s.name = t.Name;
                s.permanent = t.Permanent;
                s.hour_teken_month = s.hour_teken_month;
                sqlEntities.SaveChanges();
              
            }
        }
        public static List<Teacher> GetTechers()
        {
            List<Teacher> teachers = new List<Teacher>();
            IEnumerable<techer> a;
            try
            {
                using (sqlEntities sqlEntities = new sqlEntities())
                {

                    a = sqlEntities.techer.ToList();
                    foreach (var item in a)
                    {
                        var i = Mapper.Casting(item);
                        teachers.Add(i);
                    }
                }
            }
            catch (EntityDataSourceValidationException e) { e.InnerException.ToString(); }

            return teachers;
        }
    }
}
