require("dotenv").config();
const express = require("express");
const mongoose= require("mongoose");
const cors=require("cors");
const bodyParser=require("body-parser");

const app=express();

app.use(cors());
app.use(bodyParser.json());

const {HoldingModel}=require("./models/HoldingModel");
const { PositionsModel }=require("./models/PositionsModel.js");
const {OrdersModel}=require("./models/OrdersModel.js")

const PORT= process.env.PORT || 8080;
const url = process.env.MONGO_URL;

mongoose.connect(url);

app.get("/allHoldings", async(req,res)=>{
    let allHoldings=await HoldingModel.find({});
    res.json(allHoldings);

});
app.get("/allPositions", async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);

})


app.listen(PORT,()=>{
    console.log(`App is listening on ${PORT} `);
    
});