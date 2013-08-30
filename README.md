Task 3 - First completetion of a SPA. Single Page Application.

Main points learned: 

1. ng-view 
2. Building a module eg. var app = ngular.module("XXX",[])
3. config
4. $routeProvder for routing to other sites
5. .when/.otherwise
6. $scope
7. Including controllers within config
8. Building Controllers and their relevance
9. How to links to other websites  - <a href="#/home.html">
9. The creation of partial folders

Template:
var app = angular.module('site',[])
app.config(function($routeProvider){
	$routeProvider.
	when("/",{templateUrl:"partials/home.html"}).
	when("/about",{templateUrl:"partials/about.html"}).
	when("/admin/system",{templateUrl:"partials/admin/system.html", controller:"systemCtrl"}).
	when("/admin/user",{templateUrl:"partials/admin/user.html"}).
	otherwise({ redirectTo: '/' });
})



