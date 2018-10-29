var express = require('express');
var router = express.Router();
let app = require('../app');
const Sequelize = require('sequelize');


/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(app);
  //app.UserModel.findAll().then(users => {
    //res.json(users);
  //});
  res.send('moi');

});

module.exports = router;
