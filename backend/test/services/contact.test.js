const assert = require('assert');
const app = require('../../src/app');

describe('\'Contact\' service', () => {
  it('registered the service', () => {
    const service = app.service('contacts');

    assert.ok(service, 'Registered the service');
  });
});
