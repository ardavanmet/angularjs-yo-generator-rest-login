'use strict';

/**
 * @ngdoc function
 * @name testGeneratorAngularApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the testGeneratorAngularApp
 */
angular.module('testGeneratorAngularApp')
  .controller('LoginCtrl', function ($scope, loginServiceFactory) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.msgtxt = '';
    $scope.login=function(user){
      console.log(loginServiceFactory.login(user));
    };
  });
