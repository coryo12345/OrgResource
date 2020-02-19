// express code here
// endpoints at /api/web
var session = require('express-session')
var express = require('express');
var path = require('path');
var app = express();
var indexRouter = require('./routes');
const uuidv1 = require('uuid/v1');
// get env variables
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    genid: function(req) {
        return uuidv1() // use UUIDs for session IDs
    },
    secret: 'tempsecret',
    resave: false,
    saveUninitialized: false,
    cookie: {}
}));

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// is this needed?
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/web', indexRouter);

app.listen(process.env.PORT, () => console.log(`Webservice listening on port ${process.env.PORT}!`))