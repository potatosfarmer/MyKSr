angular.module('myksr.users', [])

.controller('UsersCtrl', function($scope, $window, $http) {
  console.log('INSIDE USERS');

  // eventually Fetch the users who are in the same group as the rater,
  // for now, fetch all users, then save it as a scope variable
  // 
  
  $scope.rate = function() {
    $window.location = '#/ratings';
  }

  $scope.clickFriend = function(rater, rated) {
  	var urlString = `/${rater}/${rated}`;
  	$http.get(urlString).then(function (resonse) {
  	// If !(response), redirect them to rating page

  	//else direct them to the friend's info page

  	}, function (error) {

  	});
  }
});