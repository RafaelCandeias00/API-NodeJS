'use strict';

const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

exports.create = async(body) => {
    var customer = new Customer(body);
    await customer.save();
}

exports.authenticate = async(body) => {
    const res = await Customer.findOne({
        email: body.email, 
        password: body.password
    });
    return res;
}

exports.getById = async(id) => {
    const res = await Customer.findByID(id);
    return res;
}