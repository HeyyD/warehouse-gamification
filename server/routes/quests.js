var express = require('express');
var router = express.Router();

const models = require('../models');


/* GET quest listing. */
router.get('/', function(req, res, next) {
  models.Quest.findAll().then(quests => {
    res.json(quests);
  });
});

router.get('/:id', function(req, res, next) {
  if(isValidId(req.params.id)) {
    models.Quest.findById(req.params.id)
    .then(quests => {
      res.json(quests);
    })
    .catch(err => {
      res.json(err)
    });
  } else {
    res.json({
        msg: "Bad request"
    })
  }
});


const isValidId = (id) => {
  if (!isNaN(id) & isFinite(id) & id %1 === 0) {
    return true;
  }
  return false;
}

module.exports = router;
