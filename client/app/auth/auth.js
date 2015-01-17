// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  var usernameAllowed = /^(\w|\d){1,30}$/i;
  var passwordAllowed = /^.{1,50}$/i;
  $scope.signin = function () {
    if($scope.user.username.match(usernameAllowed)) {
      if ($scope.user.password.match(passwordAllowed)) {
        Auth.signin($scope.user)
          .then(function (token) {
            $window.localStorage.setItem('com.shortly', token);
            $location.path('/links');
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {//password is invalid
        console.error('your password is too long!');
      }
    } else {//username is invalid
      console.error('username has invalid characters');
    }
  };

  $scope.signup = function () {
    if($scope.user.username.match(usernameAllowed)) {
      if ($scope.user.password.match(passwordAllowed)) {
        Auth.signup($scope.user)
          .then(function (token) {
            $window.localStorage.setItem('com.shortly', token);
            $location.path('/links');
          })
          .catch(function (error) {
            console.error(error);
          });
      } else {
        console.error('your password is too long!');
      }
    } else {
      console.error('username has invalid characters');
    }
  };
});
