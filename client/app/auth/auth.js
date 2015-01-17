// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.valid = {username: true, password: true}
  var usernameAllowed = /^(\w|\d){1,30}$/i;
  var passwordAllowed = /^.{1,50}$/i;
  $scope.signin = function () {
    $scope.valid.username = $scope.user.username.match(usernameAllowed)
    $scope.valid.password = $scope.user.password.match(passwordAllowed)

    if ($scope.valid.username && $scope.valid.password) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  $scope.signup = function () {
    $scope.valid.username = $scope.user.username.match(usernameAllowed)
    $scope.valid.password = $scope.user.password.match(passwordAllowed)

    if ($scope.valid.username && $scope.valid.password) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };
});
