
const express = require('express');
const app = express();
const path = require('path');

const PORT = 8080;

app.use('/static', express.static('build/static'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
});

app.listen(PORT);
console.log(`listening on port ${PORT}`);
