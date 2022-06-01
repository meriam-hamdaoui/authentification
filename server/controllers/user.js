const USER = require("../models/user");
//import the hash package
const bcrypt = require("bcryptjs");
//import the jwt pack
const jwt = require("jsonwebtoken");

exports.registration = async (req, res) => {
  //recupper adta from our req.body
  const { name, email, password } = req.body;
  try {
    //search if the user exists already
    const exists = await USER.findOne({ email });
    if (exists) {
      return res.status(400).send("this email exists already");
    }

    //if not we're gonna create a nex user
    const newUser = await new USER(req.body);

    //befor saving user information, we have to hash the password
    //for this ae need bcryptjs package
    //generate a salt round for aour hash
    const salt = bcrypt.genSaltSync(10);

    //we hash the passwor and the salt together
    const hash = bcrypt.hashSync(password, salt);

    //we add the hash to the user password
    newUser.password = hash;

    //after hashing the password, the user need a CIN to identifie his profile
    //for this we need another package jwt (token)

    //befor the token we specify the action object to sign
    const payload = { id: newUser._id };
    const token = jwt.sign(payload, process.env.privateKey);

    newUser.save();

    //send a positif response
    res.status(200).send({ msg: "registration success", newUser, token });
  } catch (error) {
    console.error(`registration ERROR_MESSAGE => ${error}`);
    res.status(500).send("registration FAILED");
  }
};

//login controller
exports.login = async (req, res) => {
  //for login in ou only need to reccuper the email and the password
  const { email, password } = req.body;
  try {
    //first we see if we have a user with the req email
    const found = await USER.findOne({ email });
    //if t doesn't exist
    if (!found) {
      return res.status(500).send({
        msg: "you don't have an account, if you want perceed SIGN_UP",
      });
    }
    //if it exists, we have to match the passwords
    const isMatch = await bcrypt.compare(password, found.password);
    //if the passwords didn't match we should infor the user
    if (!isMatch) {
      return res.status(400).send({ msg: "password incorrect" });
    }

    //if everything works correctly we need the token to acceed to the profile
    const payload = { id: found._id };
    const token = jwt.sign(payload, process.env.privateKey);

    res.status(200).send({ msg: `welcome ${found.name}`, token, found });
  } catch (error) {
    console.error(`login ERROR_MESSAGE => ${error}`);
    res.status(500).send("login FAILED");
  }
};
