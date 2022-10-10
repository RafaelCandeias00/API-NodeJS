'use strict'

// Método CREATE
exports.post = (req, res, next) => {
    res.status(201).send(req.body);
};

// Método UPDATE
exports.put = (req, res, next) => {
    const id = req.params.id; // Recuperando id passado pela rota
    res.status(200).send({
        id: id, 
        item: req.body 
    });
};

// Método DELETE
exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};
