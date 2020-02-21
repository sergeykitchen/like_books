const mongoose = require("mongoose");
const passport = require("passport");
const router = require("express").Router();
var jwtDecode = require("jwt-decode");
const auth = require("../auth");
const Users = mongoose.model("Users");

//POST new user route (optional, everyone has access)
router.post("/", auth.optional, async (req, res, next) => {
  const {
    body: { user }
  } = req;
  if (!user.email) {
    return res.status(422).json({
      message: "is required"
    });
  }

  if (!user.password) {
    return res.status(422).json({
      message: "is required"
    });
  }
  if (!user.name) {
    return res.status(422).json({
      message: "is required"
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  return finalUser
    .save()
    .then(() => {
      res.json({ user: finalUser.toAuthJSON() });
    })
    .catch(e => {
      return res.status(422).json({
        message: `User with email ${user.email} already exists.`
      });
    });
});

//POST login route (optional, everyone has access)
router.post("/login", auth.optional, (req, res, next) => {
  const {
    body: { user }
  } = req;

  if (!user.email) {
    return res.status(422).json({
      errors: {
        email: "is required"
      }
    });
  }
  if (!user.password) {
    return res.status(422).json({
      password: "is required"
    });
  }

  passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        return next(err);
      }
      if (passportUser) {
        const user = passportUser;
        user.token = passportUser.generateJWT();
        return res.json({ user: user.toAuthJSON() });
      }
      return res.status(404).json({
        message: info.message
      });
    }
  )(req, res, next);
});

router.post("/autologin", (req, res, next) => {
  const token = req.headers.authorization;
  var { id } = jwtDecode(token);

  try {
    return Users.findById(id).then(user => {
      if (!user) {
        return res.sendStatus(404);
      }
      return res.json({ user: user.toAuthJSON() });
    });
  } catch (error) {
    res.status(500).json({ message: "Something wrong" });
  }
});

//GET current route (required, only authenticated users have access)
router.get("/current", auth.required, (req, res, next) => {
  const {
    payload: { id }
  } = req;

  return Users.findById(id).then(user => {
    if (!user) {
      return res.sendStatus(400);
    }
    return res.json({ user: user.toAuthJSON() });
  });
});

router.get("/get_all", async (req, res, next) => {
  try {
    const users = await Users.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Something wrong" });
  }
});

router.get("/remove_all", (req, res, next) => {
  Users.remove({}, () => {
    res.send("ok");
  });
});

module.exports = router;
