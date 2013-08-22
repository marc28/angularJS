var app = angular.module('site',[])
app.config(function($routeProvider){
	$routeProvider.
	when("/",{templateUrl:"partials/home.html"}).
	when("/about",{templateUrl:"partials/about.html"}).
	when("/admin/system",{templateUrl:"partials/admin/system.html", controller:"systemCtrl"}).
	when("/admin/user",{templateUrl:"partials/admin/user.html"}).
	otherwise({ redirectTo: '/' });
})

function systemCtrl($scope){
	$scope.words = "What ever you are reading here is changed via the Controller 'systemCtrl' in the site.js file. This is not hard coded into the system.html file and can only be changed from the site.js file";
	$scope.words2 = "This is an example of binding with a specific controller included within $routeProvider"
}
