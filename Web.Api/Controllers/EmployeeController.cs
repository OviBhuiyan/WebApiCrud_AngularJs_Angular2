using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Web.Api.Models;

namespace Web.Api.Controllers
{
    public class EmployeeController : ApiController
    {
        WebApiAngularDBEntities db = new WebApiAngularDBEntities();
        // GET api/employee  
        [HttpGet]
        public IEnumerable<Employee> GetEmployeeList()
        {
            var result = db.Employees.ToList();

            if (!result.Any())
            {
                var list = new List<Employee>
                {
                    new Employee
                    {
                        FirstName = "Rohit", LastName = "Mane", Description = "Rohit Mane", DateofBirth = DateTime.Now.AddYears(-24), Country = "IN", State = "MH", Salary = 99999, IsActive = true
                    },
                    new Employee
                    {
                        FirstName = "Shankar", LastName = "Kanase", Description = "Rahul Singh", DateofBirth = DateTime.Now.AddYears(-23), Country = "IN", State = "MH", Salary = 49999, IsActive = true
                    }
                };
                list.ForEach(m =>
                {
                    db.Employees.Add(m);
                });
                db.SaveChanges();
            }
            return result.OrderByDescending(e=>e.EmployeeId);

        }
        // GET api/employee/5  
        public Employee Get(int id)
        {
            return db.Employees.Find(id);
        }
        [HttpPost]
        // POST api/employee  
        public HttpResponseMessage AddEmployee(Employee model)
        {
            if (ModelState.IsValid)
            {

                //string filePath = "~/Content/EmployeeImage" + model.FirstName;
                //model.ImageUrl = filePath;

                model.ImageUrl = SaveImageData(model.FirstName + ".jpg", model.UserPhoto);
                var add = db.Employees.Add(model);
                db.SaveChanges();
              
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, model);
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        protected string SaveImageData(string FileName, byte[] Data)
        {
            BinaryWriter Writer = null;
            string Name = @"C:\EmployeeImages\" + FileName;

            try
            {
                // Create a new stream to write to the file
                Writer = new BinaryWriter(File.OpenWrite(Name));

                // Writer raw data                
                Writer.Write(Data);
                Writer.Flush();
                Writer.Close();

               
            }
           catch (Exception ex)
            {
                
            }
            return Name;
        }

        // PUT api/employee/5  
        public HttpResponseMessage UpdateEmployeeById(Employee model)
        {
            if (ModelState.IsValid)
            {
                db.Entry(model).State = System.Data.Entity.EntityState.Modified;
                db.SaveChanges();
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, model);
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }
        // DELETE api/employee/5  
        public HttpResponseMessage DeleteEmployee(int id)
        {
            Employee emp = db.Employees.Find(id);
            if (emp == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }
            db.Employees.Remove(emp);
            db.SaveChanges();
            return Request.CreateResponse(HttpStatusCode.OK, emp);
        }
    }
}
