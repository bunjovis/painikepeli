require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up sessions
app.use(
  session({
    httpOnly: true,
    resave: false,
    saveUninitialized: false,
    secret: 'painikepeli on paras',
    cookie: {
      expires: new Date(253402300799999),
    },
  })
);
app.use(express.static('client/build'));
app.use('/', routes);

module.exports = app;
