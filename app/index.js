const express = require('express');
const app = express();
const path = require('path');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8081 });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'slm');

app.use(express.static('public'));

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
        });
    });
});

app.get('/', function (req, res) {
    res.render(path.join(__dirname, 'views/index.slm'), {hello: 'world'});
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
