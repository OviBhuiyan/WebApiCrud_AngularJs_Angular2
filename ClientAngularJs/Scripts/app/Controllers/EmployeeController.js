﻿


var EmpControllers = angular.module("EmpControllers", []);
// this controller call the api method and display the list of employees  
// in list.html  
EmpControllers.controller("ListController", ['$scope', '$http',
    function ($scope, $http) {
        $http.get('/api/employee').success(function (data) {
            $scope.employees = data;
        });
    }
]);
// this controller call the api method and display the record of selected employee  
// in delete.html and provide an option for delete  
EmpControllers.controller("DeleteController", ['$scope', '$http', '$routeParams', '$location',
    function ($scope, $http, $routeParams, $location) {
        $scope.id = $routeParams.id;
        $http.get('/api/employee/' + $routeParams.id).success(function (data) {
            $scope.firstname = data.FirstName;
            $scope.lastname = data.LastName;
            $scope.country = data.Country;
            $scope.state = data.State;
            $scope.salary = data.Salary;
            $scope.active = data.IsActive;
            $scope.dob = data.DateofBirth;
            $scope.description = data.Description;
        });
        $scope.delete = function () {
            $http.delete('/api/Employee/' + $scope.id).success(function (data) {
                $location.path('/list');
            }).error(function (data) {
                $scope.error = "An error has occured while deleting employee! " + data;
            });
        };
    }
]);
// this controller call the api method and display the record of selected employee  
// in edit.html and provide an option for create and modify the employee and save the employee record  
EmpControllers.controller("EditController", ['$scope', '$filter', '$http', '$routeParams', '$location',
    function ($scope, $filter, $http, $routeParams, $location) {
        $http.get('/api/country').success(function (data) {
            $scope.countries = data;
        });
        $scope.id = 0;
        $scope.getStates = function () {
            var country = $scope.country;
            if (country) {
                $http.get('/api/country/' + country).success(function (data) {
                    $scope.states = data;
                });
            }
            else {
                $scope.states = null;
            }
        }
        $scope.save = function () {
            var obj = {
                EmployeeId: $scope.id,
                FirstName: $scope.firstname,
                LastName: $scope.lastname,
                Country: $scope.country,
                State: $scope.state,
                Salary: $scope.salary,
                IsActive: $scope.active,
                Description: $scope.description,
                DateofBirth: $scope.dob
            };
            if ($scope.id == 0) {
                $http.post('/api/Employee/', obj).success(function (data) {
                    $location.path('/list');
                }).error(function (data) {
                    $scope.error = "An error has occured while adding employee! " + data.ExceptionMessage;
                });
            }
            else {
                $http.put('/api/Employee/', obj).success(function (data) {
                    $location.path('/list');
                }).error(function (data) {
                    console.log(data);
                    $scope.error = "An Error has occured while Saving customer! " + data.ExceptionMessage;
                });
            }
        }
        if ($routeParams.id) {
            $scope.id = $routeParams.id;
            $scope.title = "Edit Employee";
            $http.get('/api/employee/' + $routeParams.id).success(function (data) {
                $scope.firstname = data.FirstName;
                $scope.lastname = data.LastName;
                $scope.country = data.Country;
                $scope.state = data.State;
                $scope.salary = data.Salary;
                $scope.active = data.IsActive;
                $scope.description = data.Description;
                $scope.dob = new Date(data.DateofBirth);
                $scope.getStates();
            });
        }
        else {
            $scope.title = "Create New Employee";
        }
    }
]);
















//**************************--------------------------------------------------------------------***************


//app.controller("EmployeeController", ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    //    $scope.ListOfEmployee;  
    //    $scope.Status;  
      
    //    $scope.Close = function () {  
    //        $location.path('/EmployeeList');  
    //    }      
      
    //    //Get all employee and bind with html table  
    //    $http.get("api/employee/GetAllEmployee").success(function (data) {  
    //        $scope.ListOfEmployee = data;  
      
    //    })  
    //    .error(function (data) {  
    //        $scope.Status = "data not found";  
    //    });  
      
    //    //Add new employee  
    //    $scope.Add = function () {  
    //        var employeeData = {  
    //            FirstName: $scope.FirstName,  
    //            LastName: $scope.LastName,  
    //            Address: $scope.Address,  
    //            Salary: $scope.Salary,  
    //            DOB: $scope.DOB,  
    //           // DepartmentID: $scope.DepartmentID  
    //        };  
    //        debugger;  
    //        $http.post("api/employee/AddEmployee", employeeData).success(function (data) {  
    //            $location.path('/EmployeeList');  
    //        }).error(function (data) {  
    //            console.log(data);  
    //            $scope.error = "Something wrong when adding new employee " + data.ExceptionMessage;  
    //        });  
    //    }  
      
    //    //Fill the employee records for update  
      
    //    if ($routeParams.empId) {  
    //        $scope.Id = $routeParams.empId;  
      
    //        $http.get('api/employee/GetEmployee/' + $scope.Id).success(function (data) {  
    //            $scope.FirstName = data.FirstName;  
    //            $scope.LastName = data.LastName;  
    //            $scope.Address = data.Address;  
    //            $scope.Salary = data.Salary;  
    //            $scope.DOB = data.DOB  
    //            //$scope.DepartmentID = data.DepartmentID  
    //        });  
      
    //    }  
      
    //    //Update the employee records  
    //    $scope.Update = function () {  
    //        debugger;  
    //        var employeeData = {  
    //            EmployeeID: $scope.Id,  
    //            FirstName: $scope.FirstName,  
    //            LastName: $scope.LastName,  
    //            Address: $scope.Address,  
    //            Salary: $scope.Salary,  
    //            DOB: $scope.DOB  
    //            //DepartmentID: $scope.DepartmentID  
    //        };  
    //        if ($scope.Id > 0) {  
                  
    //            $http.put("api/employee/UpdateEmployee", employeeData).success(function (data) {  
    //                $location.path('/EmployeeList');  
    //            }).error(function (data) {  
    //                console.log(data);  
    //                $scope.error = "Something wrong when adding updating employee " + data.ExceptionMessage;  
    //            });  
    //        }  
    //    }  
      
      
    //    //Delete the selected employee from the list  
    //    $scope.Delete = function () {  
    //        if ($scope.Id > 0) {  
                  
    //            $http.delete("api/employee/DeleteEmployee/" + $scope.Id).success(function (data) {  
    //                $location.path('/EmployeeList');  
    //            }).error(function (data) {  
    //                console.log(data);  
    //                $scope.error = "Something wrong when adding Deleting employee " + data.ExceptionMessage;  
    //            });  
    //        }  
      
    //    }  
    //}]);  


  