const express = require('express');
const port = 4000;
const app = express();

app.listen(port);

console.log(`Server running at http://localhost: ${port}`);

app.get('/', (req, res) => {
  const name = process.env.NAME || 'Øyvind';
  res.send(`Hello ${name}!`);
  response.end(`Hello ${name}!`);
});
