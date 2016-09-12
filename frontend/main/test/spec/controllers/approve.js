'use strict';

describe('Controller: ApproveCtrl', function () {

  // load the controller's module
  beforeEach(module('autosApp'));

  var ApproveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApproveCtrl = $controller('ApproveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApproveCtrl.awesomeThings.length).toBe(3);
  });
});
