//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TaskServiceAPI.DAL_Layer
{
    using System;
    using System.Collections.Generic;
    
    public partial class tblTask
    {
        public int QuoteNumber { get; set; }
        public string QuoteType { get; set; }
        public string Contact { get; set; }
        public string TaskDescription { get; set; }
        public string TaskType { get; set; }
        public Nullable<System.DateTime> DueDate { get; set; }
    }
}
