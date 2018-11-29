const express = require('express');
const path = require('path');
var router = express.Router();

router.use('', express.static( path.join(__dirname, '..', 'public')));

module.exports = router;
