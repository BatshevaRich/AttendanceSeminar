//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Presence
    {
        public int codePresence { get; set; }
        public Nullable<int> codeTeacher { get; set; }
        public Nullable<System.DateTime> dateDay { get; set; }
        public Nullable<int> mis_Hour { get; set; }
        public Nullable<int> statusToDay { get; set; }
        public Nullable<int> day { get; set; }
    
        public virtual statusN statusN { get; set; }
        public virtual Teacher Teacher { get; set; }
    }
}
