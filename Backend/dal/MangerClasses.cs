using common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using System.Threading.Tasks;

namespace dal
{
    public partial class @class
    {
        public static void Add(Class1 t)
        {
            @class clss = Mapper.Casting(t);
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                sqlEntities.@class.Add(clss);
                sqlEntities.SaveChanges();
            }
        }

        public static void Update(common.Class1 class1)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.@class.Where(z => z.codeClass == class1.CodeClass).First();
                try
                {
                    s.name = class1.Name;
                    sqlEntities.SaveChanges();
                }
                catch { }
            }
        }

     public static void Remove(int id)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.@class.Where(z => z.codeClass == id).First();
                try
                {
                    var schedules = sqlEntities.schedules.Where(z => z.@class == id).ToList();
                    schedules.ForEach(s1 => s1.class1 = null);
                    sqlEntities.@class.Remove(s);
                    sqlEntities.SaveChanges();
                }
                catch { }
            }

        }
        public static List<@class> get()
        {
            
            List<Class1> classes = new List<Class1>();
            List<@class> a;
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                a = sqlEntities.@class.ToList();
               
            }
            return a;
        }
    }
}
