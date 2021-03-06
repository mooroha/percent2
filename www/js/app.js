// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.controller('LogicCtrl', function($scope) {
  $scope.answer = "The answer...";
  $scope.option = function(o, x, y){
    var x = parseInt(x);
    var y = parseInt(y);
    if (isNaN(x || y)) {
        $scope.answer = "You need to pick two numbers."
        return;
      } 

      else if (o == 1) {
      $scope.answer = "The answer is " + x / y * 100+"%";
      return;
    } else if (o == 2) {
      $scope.answer = "The answer is " + x * y /100;
      return;
    } else {
      var answer = (y - x);
      var answer = (answer / x * 100);};
      answer = Math.round(answer);
      $scope.answer = "The answer is " + answer +"%";
  }

  $scope.clear = function() {
    $scope.Xper.num = "";
    $scope.Yper.num = "";
    $scope.answer = "The answer is..."
  }

});



