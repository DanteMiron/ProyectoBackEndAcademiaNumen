const express = require('express')
const app = express()
const logger = require('morgan')

const indexRouter = require('./routes/index');
const {connect} = require('./db/db')
app.use(logger('dev'));
app.use(express.json());


app.use('/producto', indexRouter);
connect();

module.exports = app;