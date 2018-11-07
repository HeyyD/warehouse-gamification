var express = require('express');
var router = express.Router();

const models = require('../models');


/* GET quest listing. */
router.get('/', function(req, res, next) {
  models.Quest.findAll().then(quests => {
    res.json(quests);
  });
});

module.exports = router;
