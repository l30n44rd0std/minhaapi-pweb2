const { DataTypes } = require('sequelize');
const sequelize = require('./database.js');

const Funcionario = sequelize.define('funcionario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  salario: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'funcionario',
  timestamps: false,
});

module.exports = Funcionario;




