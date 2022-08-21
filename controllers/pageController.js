exports.getIndexPage = (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
};
exports.getLoginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};
exports.getSingUpPage = (req, res) => {
  res.status(200).render("signup", {
    page_name: "signup",
  });
};
exports.getAddPage = (req, res) => {
  res.status(200).render("add", {
    page_name: "add",
  });
};
