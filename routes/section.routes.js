const express = require("express");

const router = express.Router();

const sectionControllers = require("../controllers/section.controllers");

router.get("/sections", sectionControllers.getSections);

module.exports = router;
