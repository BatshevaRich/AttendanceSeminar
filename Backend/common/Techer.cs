using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace common
{
    public class Teacher
    {
        private int codeTecher;

        public int CodeTeacher
        {
            get { return codeTecher; }
            set { codeTecher = value; }
        }
        private string name;
        public string Name
        {
            get { return name; }
            set { name = value; }
        }
        private bool? permanent;
        public bool? Permanent
        {
            get { return permanent; }
            set { permanent = value; }
        }
        public int?   hour_teken_month;
        public int? Hour_teken_month
        {
            get {return hour_teken_month; }
            set {hour_teken_month=value; }
        }


    }
}
