'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');

// Método GET
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);

// Método CREATE
router.post('/', controller.post);

// Método UPDATE
router.put('/:id', controller.put);

// Método DELETE
router.delete('/', controller.delete);

module.exports = router;