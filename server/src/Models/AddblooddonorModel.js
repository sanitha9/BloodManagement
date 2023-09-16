const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema definition

const AddblooddonorSchema = new Schema({
  donorID: { type:String},
  civilid: { type: String },
  fullname:{type:String},
  occupation:{type:String},
  nationality:{type:String},
  address: { type: String },
  phone: { type: Number },
  gender:{type:String},
  bloodgroup:{type:String},
  donorconsent:{type:String},

});

var AddblooddonorModel = mongoose.model('AddBloodDonors_tb', AddblooddonorSchema); //model creation
module.exports = AddblooddonorModel;
