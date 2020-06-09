using common;
using dal;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
  public  class ManagerClasses
    {
         public static void addClass(Class1 t)
        {

            @class.Add(t);
        }
        public static void remove(int id)
        {
            @class.Remove(id);
                
        }
        public static void Update(Class1 class1)
        {
            @class.Update(class1);
        }
        public static List<Class1> getList()
        {
            var a= @class.get();
            var classes = new List<Class1>();
            foreach (var item in a)
            {
                var i = Mapper.Casting(item);
               classes.Add(i);
            }
            return classes;
        }
    }
}
