const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser());
const router = express.Router();
const Cards = require("../models/imageCard");
const { default: axios } = require("axios");
router.post("/cards", async (req, res) => {
  try {

    const res = await axios.get(
      "https://fakestoreapi.com/products?limit=20"
    );

    const data = res.data;
    console.log(data);
    const cards = await Cards.insertMany([
      data[0],
      data[1],
      data[2],
      data[3],
      data[4],
      data[5],
      data[6],
      data[7],
      data[8],
      data[9],
      data[10],
      data[11],
    ]);
    return res.status(200).json({
      message: "success",
      cards,
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

router.get("/cards", async (req, res) => {
  try {
    const allcards = await Cards.find();
    return res.json({
      status: "success",
      allcards,
    });
  } catch (e) {
    return res.status(500).json({
      status: "failed to fetch the data",
      message: e.message,
    });
  }
});

router.put("/cards/:id", async (req, res) => {
  try {
    const allcards = await Cards.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { clicked: true } }
    );
    return res.json({
      status: "success",
      message: "clicked to true",
      allcards,
    });
  } catch (e) {
    res.status(500).json({
      status: "card not found",
      error: e.message,
    });
  }
});

module.exports = router;
