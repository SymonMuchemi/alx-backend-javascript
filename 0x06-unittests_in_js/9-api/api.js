const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  console.log(id);

  if (!Number.isNaN(id)) {
    return res.status(200).send(`Payment methods for cart ${id}`);
  }
  console.log(`${id} is not a number`);
  return res.status(404).send(':id must be a number');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
