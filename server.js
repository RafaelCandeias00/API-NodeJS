'use strict'

// Importando módulos
const http = require('http');
const debug = require('debug')('nodestr:server');
const express = require('express');

// Definindo porta da aplicação
const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Criando servidor
const server = http.createServer(app);
const router = express.Router(); // Arquivo de rotas

// Configurando de rota inicial
const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});
app.use('/', route);

// Para o servidor ouvir a porta
server.listen(port);
server.on('error', onError);
console.log('Ouvindo na porta: ' + port);

// Normalizando porta da aplicação | (Verificando se tem porta disponível, caso contrário usará a 3000) | Obs: Função retirada do Express
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

// Gerenciando erros do servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code){
        case 'EACCES': // Erro de permissão
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;

        case 'EADDRINUSE': // Erro de endereço em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;

        default:
            throw error;
    }
}