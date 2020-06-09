using common;
using System;
using System.Collections.Generic;
using System.Linq;

using System.Text;
using System.Threading.Tasks;

namespace dal
{
    public static class Mapper
    {
        public static techer Casting(Teacher t)
        {
            techer techer = new techer
            {
                codeTecher = t.CodeTeacher,
                hour_teken_month = t.Hour_teken_month,
                name = t.Name,
                permanent = t.Permanent,
            };
            return techer;
        }
 public static Teacher Casting(techer t)
        {
            Teacher techer = new Teacher
            {
                CodeTeacher= t.codeTecher,
              
                Hour_teken_month= t.hour_teken_month,
               Name  = t.name,
                 Permanent= t.permanent
            };
            return techer;
        }

        public static common.subjectToClass Casting(subjectToClass subject)
        {
            common.subjectToClass subjectToClass = new common.subjectToClass()
            {
                CodeSubject=subject.codeSubject,
                Name = subject.name,
                Group1 = subject.group1,
                Group2 = subject.group2
            };
            return subjectToClass;
        }

         public static Class1 Casting(@class t)
        {
            common.Class1 c = new Class1()
            {
                 CodeClass=t.codeClass , 
                Name=t.name
            };
            return c;
        }

        public static @class Casting(common.Class1 t)
        {
            @class @class = new @class()
            {
                codeClass = t.CodeClass,
                name = t.Name
            };
            return @class;
        }

        public static Presence Casting(common.Presence t)
        {
            Presence table = new Presence
            {
                codeTecher = t.CodeTecher,
                dateDay = t.dateDay,
                statusToDay = t.StatusToDay,
                mis_Hour = t.Mis_Hour,
                day = t.Day
                              
            };
            return table;
        }
        public static schedule Casting(common.Schedule s)
        {
            var n = s.su == true ? 2 : 0;
            schedule presence = new schedule
            {    
                day=s.Day,
                @class=s.Clss,
                hour_in_dey=s.Hour_in_dey,
                groups=n,
                subjectIn=s.SubjectIn,
                techer=s.Techer
                
            };
            return presence;
        }
        public static Schedule Casting(schedule s)
        {
            Schedule presence = new Schedule
            {                
               Code_schedule=s.code_schedule,
               Clss=s.@class,
               Day=s.day,
               Hour_in_dey=s.hour_in_dey,
               SubjectIn=s.subjectIn,
               Techer=s.techer

            };
            return presence;
        }

        public static subjectToClass Casting(common.subjectToClass subject)
        {
            subjectToClass subjectToClass = new subjectToClass
            {
                codeSubject = subject.CodeSubject,
                name = subject.Name,
                group1 = subject.Group1,
                group2 = subject.Group2
            };
            return subjectToClass;
        }
    }

    
}

