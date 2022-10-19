'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true // devolvendo produtos ativos no sistema
        }, 'title price slug'); // buscando todos os produtos | devolvendo apenas os campos necessário
}

exports.getBySlug = (slug) => {
    return Product
        .find({
            slug: slug, // passar slug por parametro
            active: true
        }, 'title descruption price slug tags')
}

exports.getByTag = (tag) => {
    return Product
        .find({
            tags: tag, // passar tag por parametro
            active: true
        }, 'title descruption price slug tags')
}

exports.getById = (id) => {
    return Product
        .findById(id) // passar id por parametro
}

exports.create = (body) => {
    var product = new Product(body); // instanciando e passando no corpo da requisição
    return product.save() // salvando produto
}

exports.update = (id, body) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: body.title,
                description: body.description,
                price: body.price,
                slug: body.slug
            }
        })
}

exports.delete = (id) => {
    return Product
        .findOneAndRemove(id)
}