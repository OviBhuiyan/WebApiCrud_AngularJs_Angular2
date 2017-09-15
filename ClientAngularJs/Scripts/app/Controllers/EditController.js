EmpApp.controller("EditController", ['$scope', '$http', '$location', '$routeParams', '$config', function ($scope, $http, $location, $routeParams, $config, $timeout, cfpLoadingBar) {





    $http({
        method: 'GET',
        url: $config.baseApiUrl + '/country'
    }).then(function (success) {
        $scope.countries = success.data;
    }, function (error) {
        alert(error);
    });

    //$http.get('/api/country').success(function (data) {
    //    $scope.countries = data;
    //});


    $scope.id = 0;

    $scope.getStates = function () {
        debugger;
        var country = $scope.country;
        if (country) {

            $http({
                method: 'GET',
                url: $config.baseApiUrl + '/Country/' + country
            }).then(function (success) {
                $scope.states = success.data;
            }, function (error) {
                alert(error);
            });
        }
        else {
            $scope.states = null;
        }
    }


    $scope.save = function () {   //Save OR Edit Function
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
            debugger;
            $http({
                method: 'POST',
                url: $config.baseApiUrl + '/Employee/',
                data: obj
            }).then(function (success) {
                $location.path('/list');
            }, function (error) {
                alert("save Problem !");
            });




            //$http.post('/api/Employee/', obj).success(function (data) {
            //    $location.path('/list');
            //}).error(function (data) {
            //    $scope.error = "An error has occured while adding employee! " + data.ExceptionMessage;
            //});
        }
        else {
            $http({
                method: 'PUT',
                url: $config.baseApiUrl + '/Employee/',
                data: obj
            }).then(function (success) {
                $location.path('/list');
            }, function (error) {
                alert("Edit Problem !");
            });


            //$http.put('/api/Employee/', obj).success(function (data) {
            //    $location.path('/list');
            //}).error(function (data) {
            //    console.log(data);
            //    $scope.error = "An Error has occured while Saving customer! " + data.ExceptionMessage;
            //});
        }
    }

    if ($routeParams.id) {
        $scope.id = $routeParams.id;
        $scope.title = "Edit Employee";
        debugger;
        $http({
            method: 'GET',
            url: $config.baseApiUrl + '/Employee/' + $routeParams.id
            
        }).then(function (success) {
            debugger;
            

            $scope.firstname = success.data.FirstName;
            $scope.lastname = success.data.LastName;
            $scope.country = success.data.Country;
            $scope.state = success.data.State;
            $scope.salary = success.data.Salary;
            $scope.active = success.data.IsActive;
            $scope.description = success.data.Description;
            $scope.dob = new Date(success.data.DateofBirth);
            $scope.getStates();
        }, function (error) {
            alert("save Problem !");
        });


    
    }
    else {
        $scope.title = "Create New Employee";
    }
}
]);

