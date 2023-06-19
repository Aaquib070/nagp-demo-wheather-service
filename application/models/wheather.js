"use strict";

const mongoose = require("mongoose"),
  autopopulate = require("mongoose-autopopulate"),
  Schema = mongoose.Schema;

let wheatherSchema = new Schema(
  {
    location: { type: String },
    temp_c: { type: Number },
    condition: { type: Object },
    wind_kph: { type: Number, },
    humidity: { type: Number },
    cloud: { type: Number },
  },
  {
    timestamps: true,
  }
);

wheatherSchema.plugin(autopopulate);

module.exports = mongoose.model("Wheather", wheatherSchema);
