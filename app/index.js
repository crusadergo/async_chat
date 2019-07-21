var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'slm');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render(path.join(__dirname, 'views/index.slm'));
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
