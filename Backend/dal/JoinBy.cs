using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dal
{
   public class JoinBy
    {
        private schedule schedule;

        public schedule Schedule
        {
            get { return schedule; }
            set { schedule = value; }
        }
        private Teacher teacher;

        public Teacher Teacher
        {
            get { return Teacher; }
            set { Teacher = value; }
        }
        private @class @class;

        public @class Class
        {
            get { return @class; }
            set { @class = value; }
        }
        private subjectToClass subjectToClass;

        public subjectToClass SubjectToClass
        {
            get { return subjectToClass; }
            set { subjectToClass = value; }
        }


    }
}
