const express = require('express')
const app = express()
const logger = require('morgan')

const indexRouter = require('./routes/index');
app.use(logger('dev'));
app.use(express.json());


app.use('/', indexRouter)

module.exports = app;