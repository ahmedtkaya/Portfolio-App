const nodemailer = require("nodemailer");

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

exports.getContactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};
exports.sendEmail = async (req, res) => {
  //output kısmı mail gönderildiğinde içeriğinde ne yazmalı onun belirlendiği kısım
  const outputMessage = `
  <h1>Mail Details </h1>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  </ul>
  <h1>Message</h1>
  <p>${req.body.message} </p>
  `;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "atkahmed9924@gmail.com",
      pass: "wsatfpywxaaodvhl",
    },
  });

  let info = await transporter.sendMail({
    from: `${req.body.name}  <atkahmed9924@gmail.com>`,
    to: "atkaya03@gmail.com",
    subject: `${req.body.message}`,
    html: outputMessage,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  res.status(200).redirect("contact");
};
