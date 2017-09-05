using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiCrud.Models;

namespace WebApiCrud.Controllers
{
    public class EmployeeController : ApiController
    {
        WebApiAngularDBEntities db = new WebApiAngularDBEntities();

        public EmployeeController()
        {
            if (!db.Employees.ToList().Any())
            {


                var list = new List<Employee>
                {
                    new Employee
                    {
                        FirstName = "Rohit", LastName = "Mane", Description = "Rohit Mane", DOB = DateTime.Now.AddYears(-24), Country = "IN", State = "MH", Salary = 99999
                    },
                    new Employee
                    {
                        FirstName = "Shankar", LastName = "Kanase", Description = "Rahul Singh", DOB = DateTime.Now.AddYears(-23), Country = "IN", State = "MH", Salary = 49999
                    }
                };

                db.Employees.AddRange(list);
                db.SaveChanges();


            }
        }


        [HttpPost]
        public HttpResponseMessage AddEmployee(Employee model)
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

        [HttpGet]
        public Employee GetEmployeeById(int Id)
        {
            var result = db.Employees.Find(Id);
            return result;
        }

        [HttpGet]
        public HttpResponseMessage GetAllEmployeeList()
        {
            var result = db.Employees.ToList();
            return Request.CreateResponse(HttpStatusCode.OK, result);
           
        }

    }
}
