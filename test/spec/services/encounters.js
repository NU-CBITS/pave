'use strict';

describe('Service: encounters', function () {

  // load the service's module
  beforeEach(module('paveApp'));

  // instantiate service
  var encounters;
  beforeEach(inject(function (_encounters_) {
    encounters = _encounters_;
  }));

  it('should do something', function () {
    expect(!!encounters).toBe(true);
  });

});
