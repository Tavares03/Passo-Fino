// Importa a biblioteca Express
const express = require('express');
// Importa o módulo 'path' do Node.js para lidar com caminhos de arquivos
const path = require('path');

// Cria uma aplicação Express
const app = express();
// Define a porta em que o servidor vai rodar
const PORT = 3000;

// Middleware para servir arquivos estáticos (HTML, CSS, JS, imagens)
// Isso diz ao Express para usar a pasta atual como a raiz do servidor de arquivos.
app.use(express.static(path.join(__dirname, '')));

// Rota principal que redireciona para a página de login
// Isso garante que, ao acessar a raiz, o usuário seja levado ao login.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Inicia o servidor e o faz "escutar" por requisições na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});