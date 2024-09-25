const express = require('express');
const sequelize = require('./database'); // Sua conexão com o banco de dados
const Profile = require('./models/Profile'); // Seu modelo de Profile
const Job = require('./models/Job'); // Seu modelo de Job

const app = express();
app.use(express.json());

// Rota padrão para a raiz
app.get('/', (req, res) => {
  res.send('API is running. Use the appropriate endpoints.');
});

// Exemplo de outras rotas
app.get('/profiles/:id/balance', async (req, res) => {
  const profile = await Profile.findByPk(req.params.id);
  if (profile) {
    res.json({ balance: profile.balance });
  } else {
    res.status(404).json({ error: 'Profile not found' });
  }
});

// Rodando na porta 4000
sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
  });
});
