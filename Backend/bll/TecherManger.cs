using common;
using dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public class TecherManger
    {
        public static List<Teacher> GetTeachers()
        {
          return  techer.GetTechers();
        }
        public static void addTecher(Teacher t)
        {

            techer.Add(t);
        }
        public static void remove(int id)
        {
            techer.Rename(id);
        }
        public static void Update(common.Teacher t)
        {
            techer.Update(t);
        }
    }
}
