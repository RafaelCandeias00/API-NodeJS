'use strict'

// importando modelo product
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Método GET
exports.get = (req, res, next) => {
    Product
        .find({
            active: true // devolvendo produtos ativos no sistema
        }, 'title price slug') // buscando todos os produtos | devolvendo apenas os campos necessário
        .then(data => { // pegando os produtos
            res.status(200).send(data);
        }).catch(e => { // irá retornar mensagem de erro
            res.status(400).send(e);
        });
}

// Método GET - slug
exports.getBySlug = (req, res, next) => {
    Product
        .findOne({
            slug: req.params.slug, // passar slug por parametro
            active: true
        }, 'title descruption price slug tags')
        .then(data => { 
            res.status(200).send(data);
        }).catch(e => { 
            res.status(400).send(e);
        });
}

// Método CREATE
exports.post = (req, res, next) => {
    var product = new Product(req.body); // instanciando e passando no corpo da requisição
    product
        .save() // salvando produto
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
