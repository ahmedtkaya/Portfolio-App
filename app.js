const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const fileupload = require("express-fileupload");
const MongoStore = require("connect-mongo");
const ejs = require("ejs");
const Portfolio = require("./models/Portfolio");
const pageRoute = require("./routes/pageRoute");
const userRoute = require("./routes/userRoute");
//const portfolioRoute = require("./routes/portfolioRoute");
const portfolioController = require("./controllers/portfolioController");

const app = express();

mongoose
  .connect("mongodb://localhost/portfolio-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  })
  .then(() => {
    console.log("DB connected");
  });

app.set("view engine", "ejs");

global.userIN = null;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload());

app.use(
  session({
    secret: "mine_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://localhost/portfolio-app" }),
  })
);

app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});

app.use("/user", userRoute);
app.use("/", pageRoute);

app.post("/datas", portfolioController.createPortfolio);
app.get("/gallery", portfolioController.getAllPortfolio);
app.get("/portfolios/:id", portfolioController.getPortfolio);

const port = 3000;

app.listen(port, () => {
  console.log(`Server connected on ${port}`);
});
