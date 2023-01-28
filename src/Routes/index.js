const { Router } = require('express');
const listController = require('../Controller');

const route = Router();

route.get('/', listController.getAll);

module.exports = route;