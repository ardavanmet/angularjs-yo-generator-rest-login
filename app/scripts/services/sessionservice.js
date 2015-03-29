'use strict';

/**
 * @ngdoc service
 * @name testGeneratorAngularApp.sessionService
 * @description
 * # sessionService
 * Factory in the testGeneratorAngularApp.
 */
angular.module('testGeneratorAngularApp')
  .factory('sessionService', function () {
    // Service logic
    // ...

    // Public API here
    return {
      setToken: function (token) {
        return sessionStorage.setItem('token',token);
      },
      getToken: function (){
        return sessionStorage.getItem('token');
      }
    };
  });
