//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ApiCrud.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Employee
    {
        public int EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Description { get; set; }
        public Nullable<decimal> Salary { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public Nullable<System.DateTime> DateofBirth { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public string ImageUrl { get; set; }
    }
}
