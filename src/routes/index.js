const express = require('express');
const personRoute = require('./persons.routes')

/* Router POST, GET,PUT,DELETE */
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/persons', personRoute)
}




module.exports = routerApi;
