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

// Método GET - Tag
exports.getByTag = (req, res, next) => {
    Product
        .find({
            tags: req.params.tag, // passar tag por parametro
            active: true
        }, 'title descruption price slug tags')
        .then(data => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
}

// Método GET - id
exports.getById = (req, res, next) => {
    Product
        .findById(req.params.id) // passar id por parametro
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
    Product
        .findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                slug: req.body.slug
            }
        }).then(x => {
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
    Product
        .findOneAndRemove(req.params.id)
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
