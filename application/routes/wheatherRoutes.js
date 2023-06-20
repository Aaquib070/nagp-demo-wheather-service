const express = require("express");
const Wheather = require("../models/wheather");
const router = express.Router();
const axios = require("axios")
const config = require('../config/config')


router.get("/check-wheather", async (req, res, next) => {
  try {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${config.WEATHER_API_KEY}&q=Varanasi&aqi=no`).then(response => {

     const wheatherData = {
      location: response.data.location.name,
      temp_c: response.data.current.temp_c,
      condition: response.data.current.condition,
      wind_kph: response.data.current.wind_kph,
      humidity: response.data.current.humidity,
      cloud: response.data.current.cloud
     }
     const whather = new Wheather(wheatherData)
     whather.save();
     res.send(wheatherData)
    }).catch(err=>{
      console.log(err)
      res.status(500).send(err.response.data);
    })
    
  } catch (err) {
    res.status(500).send("Something went Wrong");
  }
});


router.get("/", async (req, res, next) => {
  try {
     const whathers = await Wheather.find().sort({createdAt : -1}).limit(5);
     res.send(whathers)
    
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went Wrong");
  }
});

module.exports = router;
