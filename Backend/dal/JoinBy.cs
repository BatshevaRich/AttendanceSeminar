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
        private techer techer;

        public techer Techer
        {
            get { return techer; }
            set { techer = value; }
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
