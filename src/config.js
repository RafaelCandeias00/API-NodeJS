global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: 'mongodb+srv://rafael:rafael@ndstr.q9ms4nb.mongodb.net/?retryWrites=true&w=majority',
    sendgridKey: 'TBD', // Colocar chave fornecida pelo sendgrid
    containerConnectionString: 'TBD' // Colocar conexão com o AZURE 
}