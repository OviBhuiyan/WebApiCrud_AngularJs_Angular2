﻿

var EmpApp = angular.module('EmpApp', ['ngRoute', 'chieffancypants.loadingBar', 'ngAnimate'])
    .config(function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = true;
    });
// Example configuration stored as constant
EmpApp.constant('constantValue', {
    baseApiUrl: 'http://localhost:55572/api',
    //baseUrl: '/',
    enableDebug: true
});


    EmpApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        //$locationProvider.html5Mode({
        //    enabled: true
        //});
      //  $locationProvider.hashPrefix('');

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
       
        $locationProvider.html5Mode(true);

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

//Progress ber documentation
//https://github.com/chieffancypants/angular-loading-bar