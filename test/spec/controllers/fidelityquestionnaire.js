'use strict';

describe('Controller: FidelityquestionnaireCtrl', function () {

  // load the controller's module
  beforeEach(module('paveApp'));

  var FidelityquestionnaireCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FidelityquestionnaireCtrl = $controller('FidelityquestionnaireCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
