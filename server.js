// equivalente ao import do python
const express = require('express');

const app = express();
const port = 2727;

app.use(express.static('public'));

app.get('api/', (req, res) => {
    res.json({ mensagem: 'olá, mundo'});
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
