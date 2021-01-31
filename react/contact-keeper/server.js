const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the jungle!' });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
