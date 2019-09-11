const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create GeoLocation Schema
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

//create ninja Schema & model
const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name Field is required"]
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  },
  //add in geo location
  geometry: GeoSchema
});

const Ninja = mongoose.model("ninja", NinjaSchema);
module.exports = Ninja;
