const router = require('express').Router();
const authorRouter = require('./author-route');

router.use('/authors', authorRouter);

module.exports = router;
