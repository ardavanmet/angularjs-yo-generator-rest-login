'use strict';

/**
 * @ngdoc service
 * @name testGeneratorAngularApp.loginServiceFactory
 * @description
 * # loginServiceFactory
 * Factory in the testGeneratorAngularApp.
 */
angular.module('testGeneratorAngularApp')
  .factory('loginServiceFactory', function ($http, $location, sessionService) {
    // Service logic
    // ...

    var baseUrl = 'http://localhost:8080/UserMgmt2/api/login';
    var meaningOfLife = 42;

    // Public API here
    return {
      login: function (data) {
        console.log(data);
        var $promise=$http.post(baseUrl,{username: data.mail, password: data.password}); //send data to user.php
        $promise.then(function(msg){
          console.log(JSON.stringify(msg));
          console.log(msg.data.username);
          console.log(msg.data.access_token);
          var token = msg.data.access_token;
          if(msg.status === 200){
            sessionService.setToken(token);
            $location.path('/home');
            console.log(sessionService.getToken());
          }else{
              //scope.msgtxt='incorrect information';
          }
        });
        return meaningOfLife;
      }
    };
  });
