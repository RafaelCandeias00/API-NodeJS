// Importando módulos
const express = require('express');

// Definindo porta da aplicação
const app = express();
const router = express.Router();

// Configurando de rota inicial
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

module.exports = app;