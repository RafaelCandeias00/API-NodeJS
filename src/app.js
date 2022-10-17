// Importando módulos
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Definindo porta da aplicação
const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb+srv://rafael:rafael@ndstr.q9ms4nb.mongodb.net/?retryWrites=true&w=majority');

// Carrega models
const product = require('./models/product');

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas que pode ser utilizadas
app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;