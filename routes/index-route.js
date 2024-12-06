const router = require('express').Router();
const { main } = require('../controllers/index-controller');

router.get('/', main);

module.exports = router;
