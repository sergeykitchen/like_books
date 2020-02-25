const mongoose = require("mongoose");

const { Schema, Types } = mongoose;

const BooksSchema = new Schema({
  price: { type: Number, required: true },
  picture: String,
  author: { type: String, required: true, unique: true },
  about: String,
  tags: [String],
  voices: [{ type: Types.ObjectId, ref: "Users" }]
});

mongoose.model("Books", BooksSchema);
