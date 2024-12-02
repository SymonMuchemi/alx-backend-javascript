const express = require('express');

const app = express();
const PORT = 7865;

app.use(express.json()); // Middleware to parse JSON

const paymentObj = {
  payment_methods: {
    credit_cards: true,
    paypal: false,
  },
};

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (!Number.isNaN(id)) {
    return res.status(200).send(`Payment methods for cart ${id}`);
  }
  return res.status(404).send(':id must be a number');
});

app.get('/available_payments', (req, res) => {
  res.status(200).json(paymentObj);
});

app.post('/login', (req, res) => {
  const { username } = req.body;

  try {
    if (!username || username.length === 0) {
      return res.status(400).send('Invalid username ');
    }
    return res.status(200).send(`Welcome ${username}`);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
