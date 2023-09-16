const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema definition

const DonorActivitySchema = new Schema({
    donorid:{ type:String},
    dateofdonation:{ type:Date},
    donorstatus:{ type:String},
  placeofdonation:{type:String},
  typeofdonation:{type:String},
  comments:{type:String},
  temparature:{type:String},
  weight:{type:Number},
  height:{type:Number},
//   occupation:{type:String},
//   nationality:{type:String},
//   address: { type: String },
//   phone: { type: Number },
//   gender:{type:String},
//   bloodgroup:{type:String},
//   donorconsent:{type:String},

});

var DonorActivityModel = mongoose.model('DonorActivity_tb', DonorActivitySchema); //model creation
module.exports = DonorActivityModel;
