'use strict';

/**
 * @ngdoc overview
 * @name autosApp
 * @description
 * # autosApp
 *
 * Main module of the application.
 */
angular
  .module('autosApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngTagsInput',
    'rzModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        controllerAs: 'profile'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl',
        controllerAs: 'upload'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl',
        controllerAs: 'history'
      })
      .when('/customers', {
        templateUrl: 'views/customers.html',
        controller: 'CustomersCtrl',
        controllerAs: 'customers'
      })
      .when('/inventory', {
        templateUrl: 'views/inventory.html',
        controller: 'InventoryCtrl',
        controllerAs: 'inventory'
      })
      .when('/notifications', {
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsCtrl',
        controllerAs: 'notifications'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/auto', {
        templateUrl: 'views/auto.html',
        controller: 'AutoCtrl',
        controllerAs: 'auto'
      })
      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .when('/compare', {
        templateUrl: 'views/compare.html',
        controller: 'CompareCtrl',
        controllerAs: 'compare'
      })
      .when('/auto-summary', {
        templateUrl: 'views/auto-summary.html',
        controller: 'AutoSummaryCtrl',
        controllerAs: 'autoSummary'
      })
      .when('/approve', {
        templateUrl: 'views/approve.html',
        controller: 'ApproveCtrl',
        controllerAs: 'approve'
      })
      .when('/catalogs', {
        templateUrl: 'views/catalogs.html',
        controller: 'CatalogsCtrl',
        controllerAs: 'catalogs'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
