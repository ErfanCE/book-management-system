const { AppError } = require('../utils/app-error');

const Author = require('../models/author-model');

const addAuthor = async (req, res, next) => {
  try {
    const {
      firstname = null,
      lastname = null,
      email = null,
      dateOfBirth = null,
      nationality = null,
      books = null
    } = req.body;

    const author = new Author({
      firstname,
      lastname,
      email,
      dateOfBirth,
      nationality,
      books
    });

    await author.save();

    res.status(200).json({
      status: 'success',
      data: { author }
    });
  } catch (err) {
    next(new AppError(500, err.message));
  }
};

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find({}).select('firstname lastname');

    res.status(200).json({
      status: 'success',
      data: { authors }
    });
  } catch (err) {
    next(new AppError(500, err.message));
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const { id: authorId } = req.params;

    const author = await Author.findById(authorId);
    if (!author) {
      return next(new AppError(404, `auhtor (id: ${authorId}) not found`));
    }

    res.status(200).json({
      status: 'success',
      data: { author }
    });
  } catch (err) {
    next(new AppError(500, err.message));
  }
};

module.exports = { addAuthor, getAllAuthors, getAuthorById };
