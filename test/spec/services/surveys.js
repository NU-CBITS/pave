'use strict';

describe('Service: surveys', function () {

  // load the service's module
  beforeEach(module('paveApp'));

  // instantiate service
  var surveys;
  beforeEach(inject(function (_surveys_) {
    surveys = _surveys_;
  }));

  it('should do something', function () {
    expect(!!surveys).toBe(true);
  });

});
