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
    public partial class Teacher
    {
        public static void Add(Teacher t)
        {
            Teacher Teacher = Mapper.Casting(t);
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                try
                {
                    sqlEntities.Teacher.Add(Teacher);
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
                var s = sqlEntities.Teacher.Where(z => z.codeTeacher == id).First();
               
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
                        var schedules = sqlEntities.schedules.Where(z => z.Teacher == id).ToList();
                        var p = sqlEntities.Presence.Where(z => z.codeTeacher == id).ToList();
                        schedules.ForEach(s1 => s1.Teacher1 = null);
                        p.ForEach(p1 => p1.Teacher = null);
                        sqlEntities.Teacher.Remove(s);
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
                var s = sqlEntities.Teacher.Where(z => z.codeTeacher == t.CodeTeacher).First();
                s.name = t.Name;
                s.permanent = t.Permanent;
                s.hour_teken_month = s.hour_teken_month;
                sqlEntities.SaveChanges();
              
            }
        }
        public static List<Teacher> GetTeachers()
        {
            List<Teacher> teachers = new List<Teacher>();
            IEnumerable<Teacher> a;
            try
            {
                using (sqlEntities sqlEntities = new sqlEntities())
                {

                    a = sqlEntities.Teacher.ToList();
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
