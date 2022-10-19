'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async() => {
    const res = await Product.find({
            active: true // devolvendo produtos ativos no sistema
        }, 'title price slug'); // buscando todos os produtos | devolvendo apenas os campos necessário
    return res;
}

exports.getBySlug = async(slug) => {
    const res = await Product
        .findOne({
            slug: slug, // passar slug por parametro
            active: true
        }, 'title descruption price slug tags')
    return res;
}

exports.getByTag = async(tag) => {
    const res = await Product
        .find({
            tags: tag, // passar tag por parametro
            active: true
        }, 'title descruption price slug tags')
    return res;
}

exports.getById = async(id) => {
    const res = await Product
        .findById(id) // passar id por parametro
    return res;
}

exports.create = async(body) => {
    var product = new Product(body); // instanciando e passando no corpo da requisição
    await product.save() // salvando produto
}

exports.update = async(id, body) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: body.title,
                description: body.description,
                price: body.price,
                slug: body.slug
            }
        })
}

exports.delete = async(id) => {
    await Product
        .findOneAndRemove(id)
}