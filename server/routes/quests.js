var express = require('express');
var router = express.Router();

const models = require('../models');


/* GET quest listing. */
router.get('/', function(req, res, next) {
  models.Quest.findAll({ include: [{ all: true }]}).then(quests => {
    res.json(quests);
  });
});

router.get('/:id', function(req, res, next) {
  if(isValidId(req.params.id)) {
    models.Quest.findById(req.params.id, { include: [{ all: true }]})
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
})

router.delete('/:id', (req, res, next) => {
  if(isValidId(req.params.id)) {
    models.Quest.destroy({
      where: {
        id: req.params.id 
      } 
    })
    .then(quest => {
      res.json({msg: "Deleted"}) 
    })
    .catch(err => {
      res.json(err) 
    })
  }else {
    res.json({
      msg: "Bad request" 
    }) 
  }
})
router.post('/', (req, res, next) => {
  const body = req.body
  //Day that is week from now
  models.Quest.create({ 
    title: body.title,
    isComplete: false,
    description: body.description
  })
    .then( q => res.json(q) )
    .catch( err => res.json(err) )
})

const isValidId = (id) => {
  if (!isNaN(id) & isFinite(id) & id %1 === 0) {
    return true;
  }
  return false;
}

module.exports = router;
