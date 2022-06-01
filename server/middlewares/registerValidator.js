//to use registration validator we need express-validator package
const { body, validationResult } = require("express-validator");

//this middleware is an array of error msgs
exports.regValidator = [
  body("email", "please enter a valid email").isEmail(),
  body(
    "password",
    "the password must have 5 caracteres as min and 10as max"
  ).isLength({ min: 5, max: 10 }),
];
//the validation function will excutethe controller if no error appears
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

//we need a middleware to validate email-domain
exports.validDomain = (req, res, next) => {
  const domainTab = [
    "gmail",
    "yahoo",
    "outlook",
    "hotmail",
    "fr",
    "com",
    "org",
    "net",
    "int",
  ];
  const { name, email, password } = req.body;
  const indexA = email.lastIndexOf("@");
  const indexB = email.lastIndexOf(".");
  const domainfName = email.slice(indexA + 1, indexB);
  const domainlName = email.slice(indexB + 1);
  if (!domainTab.includes(domainfName) || !domainTab.includes(domainlName)) {
    return res.status(500).send("invalid domain name");
  }
  next();
};

exports.logValidator = [body("email", "please enter a valid email").isEmail()];
