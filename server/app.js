var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var db = require('./secret/db.json');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// Create connection to database
var config = 
   {
     userName: db.username,
     password: db.password,
     server: db.address,
     options: 
        {
           database: 'warehouseDB' //update me
           , encrypt: true
        }
   }
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
    if (err) {
          console.log(err)
    } else{
        queryDatabase()
    }
});

function queryDatabase()
   { console.log('Reading rows from the Table...');

       // Read all rows from table
     request = new Request(
          "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE='BASE TABLE'",
          function(err, rowCount, rows) {
                console.log(rowCount + ' row(s) returned');
                process.exit();
        }
      );

     request.on('row', function(columns) {
        columns.forEach(function(column) {
            console.log("%s\t%s", column.metadata.colName, column.value);
         });
      });
     connection.execSql(request);
   }

module.exports = app;
