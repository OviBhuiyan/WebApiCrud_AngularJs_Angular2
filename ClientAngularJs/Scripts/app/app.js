

var EmpApp = angular.module('EmpApp', ['ngRoute']);

    EmpApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $routeProvider.when('/list',
        {
            templateUrl: 'Scripts/app/Views/Employee/list.html',
            controller: 'ListController'
        }).
        when('/create',
        {
            templateUrl: 'Scripts/app/Views/Employee/edit.html',
            controller: 'EditController'
        }).
        when('/edit/:id',
        {
            templateUrl: 'Scripts/app/Views/Employee/edit.html',
            controller: 'EditController'
        }).
        when('/delete/:id',
        {
            templateUrl: 'Scripts/app/Views/Employee/delete.html',
            controller: 'DeleteController'
        }).
        otherwise(
        {
            redirectTo: '/list'
        });
}]);  









//var app = angular.module('myApp', ['ngRoute']);

//app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

//    $routeProvider.when('/list',
//        {
//            templateUrl: 'Employee/list.html',
//            controller: 'ListController'
//        }).
//        when('/create',
//        {
//            templateUrl: 'Employee/edit.html',
//            controller: 'EditController'
//        }).
//        when('/edit/:id',
//        {
//            templateUrl: 'Employee/edit.html',
//            controller: 'EditController'
//        }).
//        when('/delete/:id',
//        {
//            templateUrl: 'Employee/delete.html',
//            controller: 'DeleteController'
//        }).
//        otherwise(
//        {
//            redirectTo: '/list'
//        });  
//}]);  


////follow this
////http://www.c-sharpcorner.com/article/angularjs-crud-operations-with-web-api-part-two/
////http://www.c-sharpcorner.com/article/crud-using-mvc-web-api-and-angularjs/