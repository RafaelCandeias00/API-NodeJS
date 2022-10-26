'use strict';

// Criando esquema 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title:{
        type: String,
        required: [true, "O título é obrigatório!"],
        trim: true
    },
    slug:{
        type: String,
        required: [true, "O slug é obrigatório!"],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, "A description é obrigatório!"]
    },
    price:{
        type: Number,
        required: [true, "O preço é obrigatório!"]
    },
    active:{
        type: Boolean,
        required: [true, "A active é obrigatório!"],
        default: true
    },
    tags:[{
        type: String,
        required: [true, "A tags é obrigatório!"]
    }],
    image: {
        type: String,
        required: [true, "A imagem é obrigatória!"],
        trim: true
    }
});

module.exports = mongoose.model('Product', schema);
