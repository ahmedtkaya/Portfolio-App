const Portfolio = require("../models/Portfolio");

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
  const portfolios = await Portfolio.find({});
  res.status(200).render("gallery", {
    portfolios,
    page_name: "gallery",
  });
};
