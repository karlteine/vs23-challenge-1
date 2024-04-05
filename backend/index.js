const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/meals', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'meals.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading meals.json file:', err);
      res.status(500).send('Error reading meals.json file');
      return;
    }

    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
