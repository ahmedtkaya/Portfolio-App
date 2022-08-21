const User = require("../models/User");
const bcrypt = require("bcrypt");

/*
exports.createUser = async (req, res) => {
  //yeni bir user oluşturduk ama create sayfamız olmadığı için json oluşturuyoruz

  try {
    const user = User.create(req.body);
    //bu bir simülasyondur ve hatayı yakalamak için try catch yazdık
    res.status(201).render("login", {
      status: "success",
      user,
      page_name: "login",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};*/

exports.loginUser = async (req, res) => {
  //login user function

  try {
    const { name, password } = req.body;

    User.findOne({ name }, (err, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            //user session
            req.session.userID = user._id;
            res.status(200).redirect("/");
          }
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.logOutUser = async (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
