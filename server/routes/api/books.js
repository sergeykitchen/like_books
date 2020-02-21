const mongoose = require("mongoose");
const router = require("express").Router();
const auth = require("../auth");
const Books = mongoose.model("Books");
const Users = mongoose.model("Users");
const socketServer = require("../../socket-server");
const validateIdMiddleware = require("../../middlewares/validateObjectId");
mongoose.Promise = global.Promise;

router.get("/", auth.optional, async (req, res, next) => {
  try {
    const books = await Books.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Something wrong" });
  }
});

router.post("/vote", auth.required, async (req, res, next) => {
  try {
    socketServer.emit("vote");

    const bookId = req.body.bookId;
    const voteUser = req.user;
    const user = Users.findByIdAndUpdate(
      {
        _id: req.user.id
      },
      {
        $push: { likedBooks: bookId }
      },
      { new: true }
    );

    const book = Books.findByIdAndUpdate(
      {
        _id: bookId
      },
      {
        $push: { voices: voteUser.id }
      },
      { new: true }
    );
    const result = await Promise.all([user, book]);
    socketServer.emit("voted", {
      voices: { voices: result[1].voices, bookId: bookId }
    });
    return res.json({
      status: "ok"
    });
  } catch (error) {
    return res.status(500).json({ message: "Something wrong" });
  }
});

router.get("/:id", validateIdMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    if (!book) {
      return res.sendStatus(404);
    }
    const { voices } = book;
    const users = await Users.find({ _id: { $in: voices } });
    const votedUsers = users.map(user => {
      return {
        userName: user.name,
        userEmail: user.email,
        userId: user._id
      };
    });

    return res.json({ book: { ...book._doc, voices: votedUsers } });
  } catch (error) {
    return res.status(500).json({ message: "Something wrong" });
  }
});

// router.get("/remove_all", (req, res, next) => {
//   Books.remove({}, () => {
//     res.send("ok Books");
//   });
// });

module.exports = router;
