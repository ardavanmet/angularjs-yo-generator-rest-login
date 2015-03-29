'use strict';

/**
 * @ngdoc function
 * @name testGeneratorAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testGeneratorAngularApp
 */
angular.module('testGeneratorAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
