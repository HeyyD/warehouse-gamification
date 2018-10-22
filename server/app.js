var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Sequelize = require('sequelize');
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

// ORM connection
const warehouseDB = new Sequelize('warehouseDB', db.username, db.password, {
  dialect: 'mssql',
  host: db.address,
  port: 1433, // Default port
  encrypt: true,
  logging: false, // disable logging; default: console.log
  dialectOptions: {
    encrypt: true,
    requestTimeout: 10000
  }
});

// Define the 'User' model
var User = warehouseDB.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  level: Sequelize.INTEGER,
  xp: Sequelize.INTEGER,
});

// Define the 'Quest' model
const Quest = warehouseDB.define('quest', {
  title: Sequelize.STRING,
  dueDate: Sequelize.DATE,
  isComplete: Sequelize.BOOLEAN,
  description: Sequelize.TEXT,
});
Quest.hasMany(User);

warehouseDB.sync({force: true})
.then(function() {

    // Create demo: Create a User instance and save it to the database
    User.create({
      username: 'Demon_Slayer99',
      password: 'Shrestinian',
      level: 12,
      xp: 1251
    })
    .then(function(user) {
        console.log('\nCreated User:', user.get({ plain: true}));

        Quest.create({
            title: 'Kill the Box Dragon!',
            dueDate: new Date(2017,04,01),
            isComplete: false,
            description: "Just kill the dragon!"
        })
        .then(function(quest) {
            console.log('\nCreated Quests:', quest.get({ plain: true}));

            quest.setUsers([user])
            .then(function() {
            
                // Read demo: find incomplete tasks assigned to user 'Anna''
                User.findAll()
                .then(function(users) {
                    console.log('all users: ', JSON.stringify(users));                    
                })
            })
        })
    })
})
module.exports = app;
