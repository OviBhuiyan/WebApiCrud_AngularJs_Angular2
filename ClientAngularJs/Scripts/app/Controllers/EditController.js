EmpApp.controller("EditController", ['$scope', '$http', '$location', '$routeParams', 'constantValue', function ($scope, $http, $location, $routeParams, constantValue, $timeout, cfpLoadingBar, $upload) {





    $http({
        method: 'GET',
        url: constantValue.baseApiUrl + '/Country/GetCountry'
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
                url: constantValue.baseApiUrl + '/Country/GetStateByCountryId/' + country
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
    $scope.LoadFileData = function (files) {
        $scope.files = files;
    };

    //Upload Image Byte Convert
    $scope.uploadFile = function (input) {
        debugger;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            //Create a canvas and draw image on Client Side to get the byte[] equivalent
            var canvas = document.createElement("canvas");
            var imageElement = document.createElement("img");

            reader.onload = function (e) {

                //Sets the Old Image to new New Image //
                var dataURL = reader.result;
                var output = document.getElementById('photo-id');
                output.src = dataURL;
                //$('#photo-id').attr('src', e.target.result);
                //var testResult = e.target.result;
          
                //imageElement.setAttribute('src', e.target.result);
                //canvas.width = imageElement.width;
                //canvas.height = imageElement.height;
                //var context = canvas.getContext("2d");
                //context.drawImage(imageElement, 0, 0);
                //var base64Image = canvas.toDataURL("image/jpeg");
         
                //Removes the Data Type Prefix 
                //And set the view model to the new value
                //$scope.UserPhoto = base64Image.replace(/data:image\/jpeg;base64,/g, '');

                //console.log("Encoded image: ", base64Image);

                $scope.UserPhoto = dataURL.replace(/data:image\/jpeg;base64,/g, '');

            }

            //Renders Image on Page
            reader.readAsDataURL(input.files[0]);
        }
    };
    //End Upload Image Byte Convert




    $scope.save = function (files) {   //Save OR Edit Function
        debugger;
        var obj = {
            EmployeeId: $scope.id,
            FirstName: $scope.firstname,
            LastName: $scope.lastname,
            Country: $scope.country,
            State: $scope.state,
            Salary: $scope.salary,
            IsActive: $scope.active,
            Description: $scope.description,
            DateofBirth: $scope.dob,
            //Attachment: $scope.files[0],
            UserPhoto: $scope.UserPhoto,
            ImageUrl: $scope.UserPhoto
        };
        if ($scope.id == 0) {
            debugger;
            //var ff = $scope.files[0];
            $http({
                method: 'POST',
                url: constantValue.baseApiUrl + '/Employee/AddEmployee',
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
                method: 'POST',
                url: constantValue.baseApiUrl + '/Employee/UpdateEmployee',
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
            url: constantValue.baseApiUrl + '/Employee/' + $routeParams.id
            
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



//Byte converter document
//http://www.macaalay.com/2014/09/26/rendering-images-from-byte-arrays-and-converting-images-to-byte-arrays-using-angularjs/