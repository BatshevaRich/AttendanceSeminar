using common;
using dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public class TeacherManager
    {
        public static List<dal.Teacher> GetTeachers()
        {
          return  dal.Teacher.GetTeachers();
        }
        public static void addTeacher(dal.Teacher t)
        {

            dal.Teacher.Add(t);
        }
        public static void remove(int id)
        {
            dal.Teacher.Rename(id);
        }
        public static void Update(common.Teacher t)
        {
            dal.Teacher.Update(t);
        }
    }
}
