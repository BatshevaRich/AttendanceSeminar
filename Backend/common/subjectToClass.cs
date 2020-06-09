using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace common
{
   public class subjectToClass
   {
        private int codeSubject;

        public int CodeSubject
        {
            get { return codeSubject; }
            set { codeSubject = value; }
        }

        private string name;

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        private string group1;

        public string Group1
        {
            get { return group1; }
            set { group1 = value; }
        }
        private string group2;

        public string Group2
        {
            get { return group2; }
            set { group2 = value; }
        }

   }
}
