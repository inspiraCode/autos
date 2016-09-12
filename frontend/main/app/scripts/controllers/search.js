'use strict';

/**
 * @ngdoc function
 * @name autosApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the autosApp
 */
angular.module('autosApp').controller('SearchCtrl', function($scope, $http, $timeout) {

    var autosToAdd = [];
    $scope.baseList = [];

    var infiniteScrollAdd = 10;

    $scope.retrieveData = function() {
        if (!isAddingAutos) {
            $http.get('sample/autos.json').then(function(data) {
                $scope.baseList = data.data;
            });
            // videoService.customGet('videos?limit=' + infiniteScrollAdd + '&skip=' + autosToAdd.length).then(function(data) {
            //     data.forEach(function(oAutoToAdd) {
            //         var oVideoFound = autosToAdd.find(function(oAutoAlreadyAdded) {
            //             return oAutoAlreadyAdded._id === oAutoToAdd._id;
            //         });
            //         if (!oVideoFound) {
            //             autosToAdd.push(oAutoToAdd);
            //         }
            //     });
            //     addAutos();
            //     infiniteScrollAdd = 5;
            // });
        }
    };

    $scope.retrieveData();


    //Animation:
    var isAddingAutos = false;
    var addAutos = function(index) {
        isAddingAutos = true;
        if (index === undefined) {
            index = 0;
        }

        var oAutoToAdd = autosToAdd[index];
        if (oAutoToAdd) {

            var oVideoFound = $scope.baseList.find(function(oAutoAlreadyAdded) {
                return oAutoAlreadyAdded._id === oAutoToAdd._id;
            });
            if (!oVideoFound) {
                $timeout(function() {
                    $scope.baseList.push(oAutoToAdd);
                    addAutos(++index);
                }, 100);
            } else {
                addAutos(++index);
            }
        } else {
            isAddingAutos = false;
            return;
        }
    };

    $scope.toggleSideNav = function() {
        if ($scope.isSideNavOpen) {
            angular.element('.SideNav').width(300);
            angular.element('.Main').css('margin-left', 300);
            $timeout(function() {
                $scope.isSideNavOpen = false;
                angular.element('.ToggleSideNavBtn').removeClass('glyphicon-arrow-right');
                angular.element('.ToggleSideNavBtn').addClass('glyphicon-remove');
            }, 200);

        } else {
            angular.element('.SideNav').width(70);
            angular.element('.Main').css('margin-left', 70);
            $timeout(function() {
                $scope.isSideNavOpen = true;
                angular.element('.ToggleSideNavBtn').addClass('glyphicon-arrow-right');
                angular.element('.ToggleSideNavBtn').removeClass('glyphicon-remove');
            }, 200);
        }
    };

    $scope.toggleSideNav();

});
