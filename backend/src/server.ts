import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Received');
  res.json({ message: "Hello World!" });
});

app.listen(3333);
