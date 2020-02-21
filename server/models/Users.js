const mongoose = require("mongoose");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const { Schema, Types } = mongoose;

const UsersSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  hash: String,
  salt: String,
  likedBooks: [{ type: Types.ObjectId, ref: "Books" }]
});

UsersSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
};

UsersSchema.methods.validatePassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
    .toString("hex");
  return this.hash === hash;
};

UsersSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 3);

  return jwt.sign(
    {
      name: this.name,
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10)
    },
    "secret"
  );
};

UsersSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    name: this.name,
    token: this.generateJWT(),
    likedBooks: this.likedBooks
  };
};

UsersSchema.methods.updateLikes = function() {
  return {};
};

mongoose.model("Users", UsersSchema);
