var express = require('express');
var router = express.Router();

const models = require('../models');


/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll({ include: [{ all: true }]}).then(users => {
    res.json(users);
  });
});

router.get('/:id', function(req, res, next) {
  if(isValidId(req.params.id)) {
    models.User.findById(req.params.id, { include: [{ all: true }]})
    .then(users => {
      res.json(users);
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

router.put('/:id', (req, res, next) => {
  console.log(req.body.lvl, req.params.id);
  if(isValidId(req.params.id)) {
    models.User.update(
      {level: req.body.level},
      {where: {id: req.params.id}} 
    ) 
    .then((rowsUpdated) => {
      res.json(rowsUpdated) 
    })
    .catch(e => {
      res.json(e) 
    })
  } else {
    res.json({ msg: "Bad request" }) 
  }
})


const isValidId = (id) => {
  if (!isNaN(id) & isFinite(id) & id %1 === 0) {
    return true;
  }
  return false;
}


module.exports = router;
