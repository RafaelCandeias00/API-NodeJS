'use strict';

// Criando esquema 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shcema = new Schema({
    name:{
        type: String,
        required: [true, "O nome é obrigatório!"]
    },
    email:{
        type: String,
        required: [true, "O email é obrigatório!"]
    },
    password:{
        type: String,
        required: [true, "A senha é obrigatória!"]
    }
});

module.exports = mongoose.model('Custumer', shcema);
