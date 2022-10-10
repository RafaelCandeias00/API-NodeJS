// Importando módulos
const express = require('express');
const bodyParser = require('body-parser');

// Definindo porta da aplicação
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando de rota inicial
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

// Método CRUD - CREATE
const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body); // Configurando resposta do servidor e pegando corpo da requisição
});

// Método CRUD - UPDATE
const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id; // Recuperando id passado pela rota
    res.status(200).send({
        id: id, 
        item: req.body 
    });
});

const del = router.delete('/', (req, res, next) => {
    res.status(200).send(req.body);
});

// Rotas que pode ser utilizadas
app.use('/', route);
app.use('/products', create);
app.use('/products', put);
app.use('/products', del);

module.exports = app;