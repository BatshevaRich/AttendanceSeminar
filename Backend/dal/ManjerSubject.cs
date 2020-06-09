using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dal
{
    public partial  class subjectToClass
    {
        public static void Add(common.subjectToClass subject)
        {
            subjectToClass subjectToClass = Mapper.Casting(subject);
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                sqlEntities.subjectToClass.Add(subjectToClass);
                sqlEntities.SaveChanges();
            }
        }

        public static void Remove(int id)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.subjectToClass.Where(z => z.codeSubject == id).First();
                try
                {
                    var schedules = sqlEntities.schedules.Where(z => z.subjectIn == id).ToList();
                      schedules.ForEach(s1 => s1.subjectToClass = null);
                    
                    sqlEntities.subjectToClass.Remove(s);
                    sqlEntities.SaveChanges();
                }
                catch (NullReferenceException)
                {


                }
            }
        }
        public static void Update(common.subjectToClass subjectToClass)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.subjectToClass.Where(z => z.codeSubject == subjectToClass.CodeSubject).First();
             //  sqlEntities.subjectToClass.
                s.name = subjectToClass.Name;
                s.group1 = subjectToClass.Group1;
                s.group2 = subjectToClass.Group2;
                sqlEntities.SaveChanges();
            }
        }
        public static List<dal.subjectToClass> GetSubject()
        {
            var subjects = new List<dal.subjectToClass>();
            
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                subjects= sqlEntities.subjectToClass.ToList();
           
            }
            return subjects;
        }
    }
}
