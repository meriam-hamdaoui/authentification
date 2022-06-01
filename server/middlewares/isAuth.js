//to render the user profile we need an authentification/permission
//again we gonna need the jwt package as well as the userSchema
const jwt = require("jsonwebtoken");
const USER = require("../models/user");


//the authentification middlewares works with req.headers
//take a token and look for the specific user 
exports.isAuth = async (req, res, next) => {   
  try {
    const token = req.header("Authorized");
    //we need a decoder to verify if the token does exist
    var decoder = jwt.verify(token, process.env.privateKey);
    //
    if(!decoder){
        return   res.status(400).send({msg : "user doesn't exist"})
    }
    //if the token is verified, we send a request search for the user profil
    const user = await USER.findById(decoder.id)
    //send the requested 
    req.user = user

next()

  } catch (error) {
      console.error(`authentification ERROR => ${error}`);
      res.status(500).send({msg : "authentification denied"})
  }
};

//req : {
    //body, => for the user data 
    //params, => for navigation
    //header,
// }
