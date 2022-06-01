require("dotenv").config();
const express = require("express");
const cors = require("cors");

//third-party models
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/user");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//use routes
app.use("/user", userRouter);

const PORT = process.env.PORT || process.env.port;
app.listen(PORT, (err) =>
  err
    ? console.error(`server crashed => ${err}`)
    : console.log(`go to localhost:${PORT}`)
);
