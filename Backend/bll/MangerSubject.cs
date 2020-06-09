using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using common;
using dal;
namespace bll
{
    public class MangerSubject
    {
        //public static List<common.subjectToClass> GetSubjects()
        //{
        //    dal.subjectToClass.GetTechers();
            
        //}
        public static void addSubject(common.subjectToClass s)
        {

            dal.subjectToClass.Add(s);
        }
        public static void remove(int id)
        {
            dal.subjectToClass.Remove(id);
        }
        public static void Update(common.subjectToClass subjectToClass)
        {
            dal.subjectToClass.Update(subjectToClass);
        }
        public static List<common.subjectToClass> GetSubjects()
        {
            var subjects =new  List<common.subjectToClass>();
            var a=dal.subjectToClass.GetSubject();
            foreach (var item in a)
            {
                var i = Mapper.Casting(item);
               
                subjects.Add(i);
            }
            return subjects;
        }
    }
}
