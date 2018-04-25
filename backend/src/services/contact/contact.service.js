// Initializes the `Contact` service on path `/contacts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/contact.model');
const hooks = require('./contact.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'contact',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/contacts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('contacts');

  service.hooks(hooks);
};
