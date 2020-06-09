using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace common
{
    public class Schedule
    {
        private int code_schedule;

        public int Code_schedule
        {
            get { return code_schedule; }
            set { code_schedule = value; }
        }

        private int? hour_in_dey;

        public int? Hour_in_dey
        {
            get { return hour_in_dey; }
            set { hour_in_dey = value; }
        }
        private int? clss;

        public int? Clss
        {
            get { return clss; }
            set { clss = value; }
        }
        private int? day;

        public int? Day
        {
            get { return day; }
            set { day = value; }
        }
        private int? subjectIn;

        public int? SubjectIn
        {
            get { return subjectIn; }
            set { subjectIn = value; }
        }
        private int? teacher;

        public int? Teacher
        {
            get { return Teacher; }
            set { Teacher = value; }
        }
        public bool? su;
        public bool? Su
        {
            get { return su; }
            set { su = value; }
        }
 
        //public static implicit operator Schedule(global::dal.schedule v)
        //{
        //    throw new NotImplementedException();
        //}
    }
}

