const router = require('express').Router();
const {
  addAuthor,
  getAllAuthors,
  getAuthorById
} = require('../controllers/author-controller');

router.post('/', addAuthor);
router.get('/', getAllAuthors);

router.get('/:id', getAuthorById);

module.exports = router;
