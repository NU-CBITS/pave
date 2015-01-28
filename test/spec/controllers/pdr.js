'use strict';

describe('Controller: PdrCtrl', function () {

  // load the controller's module
  beforeEach(module('paveApp'));

  var PdrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PdrCtrl = $controller('PdrCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
