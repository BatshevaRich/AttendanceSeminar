using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dal
{
    public partial class techer
    {

        public static void AddTeacher(techer techer)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                sqlEntities.techer.Add(techer);
                sqlEntities.SaveChanges();
            }
        }

        public static void remove(int id)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.techer.Where(z => z.codeTecher == id).FirstOrDefault();
                if (s != null)
                {
                    try
                    {
                        sqlEntities.techer.Remove(s);
                        sqlEntities.SaveChanges();
                    }
                    catch (NullReferenceException)
                    {
                    }
                }
            }
        }
        public static void Update(int id, int num_hour, bool teken)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.techer.Where(z => z.codeTecher == id).FirstOrDefault();
                if (s != null)
                {
                    s.hour_teken_month = num_hour;
                    s.permanent = teken;
                }
            }
        }
    }
}
