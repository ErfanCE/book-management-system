const router = require('express').Router();
const indexRouter = require('./index-route');

router.use('/index', indexRouter);

module.exports = router;
