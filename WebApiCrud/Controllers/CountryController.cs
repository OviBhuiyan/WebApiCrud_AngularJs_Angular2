﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiCrud.Controllers
{
    public class CountryController : ApiController
    {
        public IEnumerable<System.Web.Mvc.SelectListItem> GetCountry()
        {
            List<System.Web.Mvc.SelectListItem> countries = new List<System.Web.Mvc.SelectListItem>
        {
                new System.Web.Mvc.SelectListItem
                {
                    Text = "India",
                    Value = "IN"
                },
            new System.Web.Mvc.SelectListItem
            {
                Text = "United States",
                Value = "US"
            },
            new System.Web.Mvc.SelectListItem
            {
                Text = "United Kingdom",
                Value = "UK"
            },
            new System.Web.Mvc.SelectListItem
            {
                Text = "Australlia",
                Value = "CA"
            }
        };
            return countries;
        }
        // GET api/country/5  
        public IEnumerable<System.Web.Mvc.SelectListItem> GetStateByCountryId(string id)
        {
            List<System.Web.Mvc.SelectListItem> states = new List<System.Web.Mvc.SelectListItem>();
            switch (id)
            {
                case "IN":
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Maharashtra",
                        Value = "MH",
                    });
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Madhya Pradesh",
                        Value = "MP"
                    });
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Delhi",
                        Value = "DL"
                    });
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Kanpur",
                        Value = "KN"
                    });
                    break;
                case "US":
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "California",
                        Value = "CA"
                    });
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Newyork",
                        Value = "NY"
                    });
                    break;
                case "UK":
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "London",
                        Value = "LN"
                    });
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Paris",
                        Value = "PR"
                    });
                    break;
                case "CA":
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Sydney",
                        Value = "SD"
                    });
                    states.Add(new System.Web.Mvc.SelectListItem
                    {
                        Text = "Melbourne",
                        Value = "MB"
                    });
                    break;
            }
            return states;
        }
    }
}
