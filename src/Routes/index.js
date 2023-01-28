const { Router } = require('express');
const listController = require('../Controller');
const { validationPost, validationPut } = require('../middleware/validationTask');

const route = Router();

route.get('/', listController.getAll);
route.post('/', validationPost, listController.postList);

module.exports = route;