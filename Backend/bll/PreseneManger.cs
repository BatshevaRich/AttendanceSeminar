using dal;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace bll
{
    public static class PreseneManager
    {
        //הוספת חופש
        public static void holiday(DateTime dateStart, DateTime dateEnd)
        {
            int l;
            for (DateTime i = dateStart; i < dateEnd; i = i.AddDays(1))
            {
                switch (i.DayOfWeek)
                {
                    case (DayOfWeek.Sunday): { l = 1; break; }
                    case (DayOfWeek.Monday): { l = 2; break; }
                    case (DayOfWeek.Tuesday): { l = 3; break; }
                    case (DayOfWeek.Wednesday): { l = 4; break; }
                    case (DayOfWeek.Thursday): { l = 5; break; }
                    default/*(DayOfWeek.Friday)*/: { l = 6; break; }

                }
               Presence.AddHoliday(l,i);
            }
        }
        public static void select(int month)
        {
            Presence.selectByMonth(month);
        }
        public static void Update(int codeTachar, int code, int hour, DateTime date, int day, int statusToDay)
        {
            Presence.Update(codeTachar, code, hour, date, day, statusToDay);
        }
        public static void AddPresence(common.Presence t)
        {
            Presence presence = Mapper.Casting(t);
            Presence.Add(presence);
        }
        //החזרת פרטים לדוח
        public static Dictionary<Teacher,List<int>> getInfoForResponce()
        {
           
            var Teachers = Teacher.GetTeachers();
            var dictionary = new Dictionary<Teacher,List<int>>();
            foreach (var item in Teachers)
            {
                var a = Mapper.Casting(item);
             var p=Presence.getInfoForResponce(a);
                
                dictionary.Add(item, p);
            }
            return dictionary;
        }
    }
}
