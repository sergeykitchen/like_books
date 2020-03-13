const mongoose = require("mongoose");

module.exports = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Book not found" });
  }
  next();
};
