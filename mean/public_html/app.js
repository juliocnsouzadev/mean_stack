var express = require('express');

var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views')); //caminho para camada views setado para pasta views

app.set('view engine', 'ejs');