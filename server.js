var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('dist'));

app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get('*',function (req, res) {
    res.render('index')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})