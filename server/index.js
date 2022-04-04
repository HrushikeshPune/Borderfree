const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser());
const mongoose = require('mongoose')
//connecting to DB
 mongoose.connect('mongodb+srv://borderfree:border123@cluster0.euqjo.mongodb.net/border?retryWrites=true&w=majority',{ useNewUrlParser: true }).then( () => console.log("MongoDB Connected")).catch( (err) => console.log("MongoDB error"))


const Carousels = require("./models/carousel");
const Cards = require("./models/imageCard");

const carouselroutes = require("./routes/carousel");
const cardsroutes = require("./routes/image-card");

app.use("/", carouselroutes);
app.use("/", cardsroutes);
const PORT= 5000

//creating server
app.listen(PORT,()=>{
    console.log("app is listing at port 5000");
})

