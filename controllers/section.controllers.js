const Section = require("../models/section.model");

exports.getSections = (req, res, next) => {
  Section.findAll()
    .then((sections) => {
      const data = JSON.stringify(sections);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
