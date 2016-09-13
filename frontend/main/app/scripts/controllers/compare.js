'use strict';

/**
 * @ngdoc function
 * @name autosApp.controller:CompareCtrl
 * @description
 * # CompareCtrl
 * Controller of the autosApp
 */
angular.module('autosApp').controller('CompareCtrl', function($scope, $http) {
    $http.get('sample/autos.json').then(function(data) {
        $scope.baseList = data.data.slice(0, 5);
    });
});
