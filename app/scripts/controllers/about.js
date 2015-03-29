'use strict';

/**
 * @ngdoc function
 * @name testGeneratorAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testGeneratorAngularApp
 */
angular.module('testGeneratorAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
