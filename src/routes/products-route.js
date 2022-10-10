'use strict';

const express = require('express');
const router = express.Router();

// Método CREATE
router.post('/', (req, res, next) => {
    res.status(201).send(req.body); // Configurando resposta do servidor e pegando corpo da requisição
});

// Método UPDATE
router.put('/:id', (req, res, next) => {
    const id = req.params.id; // Recuperando id passado pela rota
    res.status(200).send({
        id: id, 
        item: req.body 
    });
});

// Método DELETE
router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

module.exports = router;