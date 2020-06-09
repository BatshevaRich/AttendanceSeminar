using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dal
{
    public partial class schedule
    {

        #region selects


        public static List<schedule> get()
        {
            List<schedule> a;
            using (sqlEntities sql=new sqlEntities())
            {
                a= sql.schedules.ToList();
            }
            return a;
        }
            
           

        public static void add(common.Schedule schedule)
        {
           
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var a = Mapper.Casting(schedule);
                sqlEntities.schedules.Add(a);
                sqlEntities.SaveChanges();
               
            }
        }
        public static void selectBySubject(int subject)
        {

            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var listMain = sqlEntities.schedules.Where(x => x.subjectIn == subject).ToList();
                var listOrderTacher = listMain.OrderBy(x => x.Teacher).ToList();
            }
        }

        public static List<schedule> selectByTacherWhereDayWorks(int dayOfWeek)
        {
            List<schedule> listMain;
            using (sqlEntities sqlEntities = new sqlEntities())
            {

                listMain = sqlEntities.schedules.Where(x => x.day == dayOfWeek).ToList();

            }
            return listMain;

        }

        public static void selectByClass(int clss)
        {

            using (sqlEntities sqlEntities = new sqlEntities())
            {

                var listMain = sqlEntities.schedules.Where(x => x.@class == clss).ToList();
                var listOrderTacher = listMain.OrderBy(x => x.day).ToList();
            }
        }
        #endregion
        //add read and write to exel

    }
}
