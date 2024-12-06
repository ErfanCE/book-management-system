const { Schema, model } = require('mongoose');

const authorSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    nationality: {
      type: String,
      required: true,
      trim: true
    },
    books: [
      {
        title: String,
        genre: String,
        publishDate: Date,
        pageCount: Number,
        price: Number,
        language: String
      }
    ]
  },
  { timestamps: true }
);

module.exports = model('Author', authorSchema);
