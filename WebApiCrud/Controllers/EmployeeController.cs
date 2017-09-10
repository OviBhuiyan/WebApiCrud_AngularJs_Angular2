using ApiCrud.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace ApiCrud.Controllers
{
    public class EmployeeController : ApiController
    {
        WebApiAngularDBEntities db = new WebApiAngularDBEntities();
        // GET api/employee  
        [ActionName("get"), HttpGet]
        public IEnumerable<Employee> Emps()
        {
            if (!db.Employees.ToList().Any())
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
            return db.Employees.ToList();

        }
        // GET api/employee/5  
        public Employee Get(int id)
        {
            return db.Employees.Find(id);
        }
        // POST api/employee  
        public HttpResponseMessage Post(Employee model)
        {
            if (ModelState.IsValid)
            {
                db.Employees.Add(model);
                db.SaveChanges();
                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, model);
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }
        // PUT api/employee/5  
        public HttpResponseMessage Put(Employee model)
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
        public HttpResponseMessage Delete(int id)
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
