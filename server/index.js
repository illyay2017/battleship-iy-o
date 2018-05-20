const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from BattleShip server');
});

app.listen(port, () => console.log(`Battleship server listening on port ${port}`));