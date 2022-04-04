const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser());
// const faker = require("faker");

const router = express.Router();
const { default: axios } = require("axios");
const Carousels = require("../models/carousel");

// const images=faker.image.image();

router.post("/carousel", async (req, res) => {
  try {
    const res = await axios.get(
      "https://fakestoreapi.com/products?limit=4"
    );

    const data = res.data;
    console.log(data);
    const carousel = await Carousels.insertMany([
      data[0],
      data[1],
      data[2],
      data[3],
    ]);
    return res.status(200).json({
      message: "success",
      carousel,
    });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
});

router.get("/carousel", async (req, res) => {
  try {
    const allcarousels = await Carousels.find();
    console.log(allcarousels)
    return res.json({
      status: "success",
      allcarousels,
    });
  } catch (e) {
    return res.status(500).json({
      status: "failed to fetch the data",
      message: e.message,
    });
  }
});

router.put("/carousel/:id", async (req, res) => {
  try {
    const clicking = await Carousels.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { clicked: true } }
    );
    return res.json({
      status: "success",
      message: "clicked to true",
      clicking,
    });
  } catch (e) {
    res.status(500).json({
      status: "image not found",
      error: e.message,
    });
  }
});

module.exports = router;
