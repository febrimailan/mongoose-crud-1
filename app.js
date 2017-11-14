const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var index = require('./routes/index');
var books = require('./routes/books');
var customers = require('./routes/customers');
var transactions = require('./routes/transactions')

app.use('/', index);
app.use('/books', books);
app.use('/customers', customers);
app.use('/transactions', transactions);

const port = process.env.PORT || 3015;
app.listen(port);
console.log(`server listening at port ${port}`);
