const express = require('express');
const app = express();
const port = 3001;

app.get('/api/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Node app running at ${port}`);
});
