const express = require("express");
const userRouter = express.Router();
const { registration, login } = require("../controllers/user");
const {
  regValidator,
  validation,
  validDomain,
  logValidator,
} = require("../middlewares/registerValidator");

const { isAuth } = require("../middlewares/isAuth");

//registration req
userRouter.post("/signup", regValidator, validDomain, validation, registration);

//login req
userRouter.post("/signin", logValidator, validDomain, login);

//get req
userRouter.get("/profile", isAuth, (req, res) => {
  res.send({ msg: `welcome ${req.user.name}`, profile: req.user });
});

module.exports = userRouter;
