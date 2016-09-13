'use strict';

/**
 * @ngdoc function
 * @name autosApp.controller:InventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the autosApp
 */
angular.module('autosApp').controller('InventoryCtrl', function($scope, $http) {
    // var list = new listController({
    //     entityName: 'Metric',
    //     baseService: metricService,
    //     modalName: 'modal-itemToSave',
    //     scope: $scope,
    //     afterLoad: function() {
    //         $scope.theDashboards = metricService.catalogs.Dashboards.getAll();
    //     }
    // }).load();

    // $scope.loadDashboardsTags = function($query, currentList) {
    //     return $scope.theDashboards.filter(function(item) {
    //         return item.Value.toLowerCase().indexOf($query.toLowerCase()) != -1;
    //     });
    // };
    // $scope.on_dashboardTag_Added = function(tagAdded, metric) {
    //     // metric.HiddenForDashboardsTags = [tagAdded]
    // };

    $http.get('sample/autos.json').then(function(response) {
        $scope.baseList = response.data.slice(0, 5);
    });
});
