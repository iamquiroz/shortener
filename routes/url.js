const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const config = require("config");

const Url = require("../models/Url");

// @route POST /api/url/shorten
// @desc  Create short URL
router.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get;

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json("Invalid base url");
  }
});

module.exports = router;
