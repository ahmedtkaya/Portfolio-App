const Portfolio = require("../models/Portfolio");
const fs = require("fs");

/*
exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body);
    res.status(200).render("index", {
      portfolio,
      page_name: "index",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllPortfolio = async (req, res) => {
  const data = await Portfolio.find({});
  res.render("portf", { data });
};
*/

exports.createPortfolio = async (req, res) => {
  try {
    const uploadDir = "public/img";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    let uploadImage = req.files.image;
    let uploadPath = __dirname + "/../public/img/" + uploadImage.name;
    uploadImage.mv(uploadPath, async () => {
      await Portfolio.create({
        ...req.body,
        image: "/img/" + uploadImage.name,
      });
      res.redirect("gallery");
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllPortfolio = async (req, res) => {
  const portfolios = await Portfolio.find({});
  res.status(200).render("gallery", {
    portfolios,
    page_name: "gallery",
  });
};

exports.getPortfolio = async (req, res) => {
  const portfolio = await Portfolio.findById(req.params.id); //buradaki portfolio, portfolio.ejs içindeki <% içindeki değişken
  res.render("portfolio", {
    portfolio,
    page_name: "portfolio",
  });
};
