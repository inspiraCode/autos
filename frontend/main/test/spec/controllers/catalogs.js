'use strict';

describe('Controller: CatalogsCtrl', function () {

  // load the controller's module
  beforeEach(module('autosApp'));

  var CatalogsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CatalogsCtrl = $controller('CatalogsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CatalogsCtrl.awesomeThings.length).toBe(3);
  });
});
