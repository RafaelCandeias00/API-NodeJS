'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service');

// Método GET
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag',controller.getByTag);

// Método CREATE
router.post('/', authService.authorize, controller.post);

// Método UPDATE
router.put('/:id', authService.authorize, controller.put);

// Método DELETE
router.delete('/:id', authService.authorize, controller.delete);

module.exports = router;