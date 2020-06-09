using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace common
{
    public class Presence
    {
        private int codePresence;
        public int CodePresence
        {
            get { return codePresence; }
            set { codePresence = value; }
        }

        public DateTime dateDay;

        public DateTime DateDay
        {
            get { return dateDay; }
            set { dateDay = value; }
        }
        private  int mis_Hour;

        public int Mis_Hour
        {
            get { return mis_Hour; }
            set { mis_Hour = value; }
        }
        private int statusToDay;

        public int StatusToDay
        {
            get { return statusToDay; }
            set { statusToDay = value; }
        }
        private int  codeTecher;

        public int  CodeTecher
        {
            get { return  codeTecher; }
            set {  codeTecher = value; }
        }
        private int day;

        public int Day
        {
            get { return day; }
            set { day = value; }
        }


    }

}

