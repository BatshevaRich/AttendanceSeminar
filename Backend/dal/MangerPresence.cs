using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace dal
{
    public partial class Presence
    {
        public static List<int> getInfoForResponce(techer t)
        {
            DateTime? dateTime;
            int numHouerForTeacherPresence=0;
            int numHouerForTeacherSick=0;
            int numToDaySick=0;
            int numHouerForTeacherAbsent=0;
            int  numDayToDriver= 0;
            List<int> listReturn = new List<int>();
            using (sqlEntities sqlEntities = new sqlEntities())
            {try
                {
                    var x = sqlEntities.Presence.ToList().Where(z => z.techer.codeTecher == t.codeTecher).ToList();

                    //לא נותן ברשימות נוכחות ריקות מה עושים?
                    x.OrderBy(o => o.dateDay);
                    
                        dateTime = x.FirstOrDefault().dateDay;



                        int d = 0;
                        foreach (var item in x)
                        {
                            switch (item.statusToDay)
                            {
                                case (1):
                                    {//שעות עבודה +נסיעות
                                        numHouerForTeacherPresence++;
                                        if (dateTime != null && (dateTime < item.dateDay || d == 0))
                                        {
                                            d = 1;

                                            dateTime = item.dateDay;

                                            numDayToDriver++;
                                        }
                                        break;
                                    }
                                case (2)://שעות מחלה
                                    {
                                        numToDaySick++;
                                        numHouerForTeacherSick++; break;
                                    }
                                case (3): { numHouerForTeacherPresence++; break; }
                                case (4)://חסרה 
                                    {
                                        numHouerForTeacherAbsent++; break;
                                    }

                            }

                        }
                                    }
                catch { }
                listReturn.Add(numHouerForTeacherPresence);
                listReturn.Add(numHouerForTeacherSick);
                // listReturn.Add(numHouerForTeacher3);
                // listReturn.Add(numHouerForTeacher4);
                listReturn.Add(numDayToDriver);
                return listReturn;
            }
            
        }

        public static void Add(Presence presence)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                //presence.day = (int)presence.dateDay.Value.DayOfWeek;
                sqlEntities.Presence.Add(presence);
                sqlEntities.SaveChanges();
            }
        }
       
        public static void AddHoliday(int i,DateTime dateTime)
        {
          var list=schedule.selectByTacherWhereDayWorks(i);
            foreach (var item in list)
            {
                Presence presence = new Presence()
                {

                    codeTecher=item.techer,
                    day=i,
                    mis_Hour=item.hour_in_dey,
                    statusToDay=3,
                                        
                };
                Presence.Add(presence);
            }
        }

        public static void remove(int code, int hour, DateTime date, int day)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.Presence.Where(z => z.codeTecher == code && z.dateDay == date && z.mis_Hour == hour).First();
                try
                {
                    sqlEntities.Presence.Remove(s);
                    sqlEntities.SaveChanges();
                }
                catch (NullReferenceException)
                {


                }
            }


        }
        public static void Update(int codeTachar, int code, int hour, DateTime date, int day, int statusToDay)
        {
            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var s = sqlEntities.Presence.Where(z => z.codeTecher == code && z.dateDay == date && z.mis_Hour == hour).First();
                try
                {
                    s.statusToDay = statusToDay;
                    s.codeTecher = codeTachar;
                }
                catch (NullReferenceException)
                {
                }
            }
        }
        // var s = sqlEntities.Presence.Where(z => z.dateDay.Value.Month == month).ToList();
        // var xx = sqlEntities.Presence.ToList();
        //var listOrderStatus = listOrderTacher.OrderBy(x => x.statusN);
        //var listOrderday = listMain.OrderBy(x => x.day);
        //var listOrderdayMis_Hour = listMain.OrderBy(x => x.mis_Hour);

        public static void selectByMonth(int month)
        {

            using (sqlEntities sqlEntities = new sqlEntities())
            {
                var listMain = sqlEntities.Presence.Where(x => x.dateDay.Value.Month == month).ToList();
                var listOrderTacher = listMain.OrderBy(x => x.techer).ToList();
            }
        }


    }
}
