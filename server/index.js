const app = require('express')();
const port = process.env.PORT || 8080;
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/../dist'))
app.get('/', (req, res) => {
  res.send('Hello from BattleShip server');
});

app.listen(port, () => console.log(`Battleship server listening on port ${port}`));