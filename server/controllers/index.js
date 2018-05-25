const router = require('express').Router();
const bodyParser = require('body-parser');

router.use('/', bodyParser.json());
router.use('/message', require('./message'));

module.exports = router;
