'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Order');

exports.get = async(body) => {
    var res = await Order.find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.create = async(body) => {
    var order = new Order(body);
    await order.save();
}