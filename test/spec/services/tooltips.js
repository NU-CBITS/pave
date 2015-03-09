'use strict';

describe('Service: tooltips', function () {

  // load the service's module
  beforeEach(module('paveApp'));

  // instantiate service
  var tooltips;
  beforeEach(inject(function (_tooltips_) {
    tooltips = _tooltips_;
  }));

  it('should do something', function () {
    expect(!!tooltips).toBe(true);
  });

});
