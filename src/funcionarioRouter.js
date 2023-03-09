const express = require('express');
const router = express.Router();
const Funcionario = require('./funcionario.js');

router.get('/', async (req, res) => {
  try {
    const funcionarios = await Funcionario.findAll();
    res.send(funcionarios);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao buscar funcionários' });
  }
});

router.get('/:id', async (req, res) => {
  const funcionarioId = req.params.id;
  try {
    const funcionario = await Funcionario.findByPk(funcionarioId);
    if (funcionario) {
      res.send(funcionario);
    } else {
      res.status(404).send({ message: 'Funcionário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao buscar funcionário' });
  }
});

router.get('/:id/nome', async (req, res) => {
  const funcionarioId = req.params.id;
  try {
    const funcionario = await Funcionario.findByPk(funcionarioId);
    if (funcionario) {
      res.send({ nome: funcionario.nome });
    } else {
      res.status(404).send({ message: 'Funcionário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao buscar funcionário' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { nome, salario, cargo } = req.body;
    const funcionario = await Funcionario.build({ nome, salario, cargo });
    const result = await funcionario.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  const funcionarioId = req.params.id;
  const dadosNovosFuncionario = req.body;
  try {
    const funcionario = await Funcionario.findByPk(funcionarioId);
    if (funcionario) {
      await funcionario.update(dadosNovosFuncionario);
      res.send({ message: 'Funcionário atualizado com sucesso' });
    } else {
      res.status(404).send({ message: 'Funcionário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao atualizar funcionário' });
  }
});

router.delete('/:id', async (req, res) => {
  const funcionarioId = req.params.id;
  try {
    const funcionario = await Funcionario.findByPk(funcionarioId);
    if (funcionario) {
      await funcionario.destroy();
      res.send({ message: 'Funcionário excluído com sucesso' });
    } else {
      res.status(404).send({ message: 'Funcionário não encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Erro ao excluir funcionário' });
  }
});

module.exports = router;
