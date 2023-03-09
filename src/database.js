const Sequelize = require('sequelize');

const sequelize = new Sequelize('funcionario_api-pweb2', 'aluno.ifal', 'aluno.ifal', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;