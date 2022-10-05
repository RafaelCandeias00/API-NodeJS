// Importando módulos
const app = require('../src/app');
const debug = require('debug')('rafael:server');
const http = require('http');

// Definindo porta da aplicação
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Criando servidor
const server = http.createServer(app);

// Para o servidor ouvir a porta
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

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

// Iniciando o Debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' 
        ? 'pipe ' + addr 
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}