const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database.js');
const funcionarioRouter = require('./funcionarioRouter.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/funcionario', funcionarioRouter);

app.listen(7000, async () => {
  console.log('servidor rodando');
});

database.sync({ alter: true })
  .then(() => {
    console.log('Modelo sincronizado com o banco de dados');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar modelo com o banco de dados:', error);
  });

module.exports = app;

