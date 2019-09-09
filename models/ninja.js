const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create ninja Schema & model
const NinjaSchema = new Schema({
  name:{
    type: String,
    required: [true, 'Name Field is required']
  },
  rank:{
    type: String
  },
  avaiable:{
    type: Boolean,
    default: false
  }
  //add in geo location
})

const Ninja = mongoose.model('ninja', NinjaSchema);
 module.exports = Ninja;