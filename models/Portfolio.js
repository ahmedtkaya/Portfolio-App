const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
  name: {
    type: String,
    unique: true, //bu isimden sadece bir veri istiyorsak yazacağız
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});
//bununla url kısmında beraber id yerine name gözükecek
PortfolioSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    // burada slug ile name'i eşitliyor
    lower: true,
    strict: true, //name'de gereksiz karakterleri siler (- :) gibi
  });
  next();
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

module.exports = Portfolio;
