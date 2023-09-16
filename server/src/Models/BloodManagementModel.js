const mongoose =require('mongoose');


const BloodManagementModelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
      },
      dob: {
        type: String,
        require: true,
      },
      image: {
        type: String,
        require: true,
      },
      address: {
        type: String,
        require: true,
      },
      mobile: {
        type: String,
        require: true,
      }
});
module.exports = mongoose.model('bloodusersdetails', BloodManagementModelSchema);