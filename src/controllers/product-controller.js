'use strict'

// importando modelo product
const mongoose = require('mongoose');
const Product = mongoose.model('Product');
const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/product-repository');

// Método GET
exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => { // pegando os produtos
            res.status(200).send(data);
        }).catch(e => { // irá retornar mensagem de erro
            res.status(400).send(e);
        });
}

// Método GET - slug
exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

// Método GET - Tag
exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

// Método GET - id
exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

// Método CREATE
exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres!');
    contract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres!');
    contract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres!');

    // Se os dados forma inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    repository
        .create(req.body)
        .then(x => { // se estiver tudo ok, irá enviar para o banco 
            res.status(201).send({
                messagem: 'Produto cadastrado com sucesso!'
            });
        }).catch(e => { // se estiver errado, irá retornar mensagem de erro
            res.status(400).send({
                messagem: 'Falha ao cadastrar produto!',
                data: e
            });
        });

};

// Método UPDATE
exports.put = (req, res, next) => {
    repository
        .update(req.params.id, req.body)
        .then(x => {
            res.status(200).send({
                message: "Produto atualizado com sucesso!"
            });
        }).catch(e => {
            res.status(400).send({
                message: "Falha ao atualizar produto!",
                data: e
            });
        });
};

// Método DELETE
exports.delete = (req, res, next) => {
    repository
        .delete(req.params.id)
        .then(x => {
            res.status(200).send({
                message: "Produto removido com sucesso!"
            });
        }).catch(e => {
            res.status(400).send({
                message: "Falha ao remover o produto!",
                data: e
            });
        });
};
