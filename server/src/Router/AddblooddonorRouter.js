const express = require('express');
const AddblooddonorRouter = express.Router();
// const bcrypt = require('bcryptjs');

const AddblooddonorModel = require('../Models/AddblooddonorModel');
const multer = require('multer');
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'../client/public/Upload')

  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload = multer({
  storage:storage

})


// const Logindata = require('../Models/LoginModel');
AddblooddonorRouter.post('/add-blooddonor',upload.single("image"),(req, res) => {
        const Data = new AddblooddonorModel({
          donorID: req.body.donorID,
          civilid: req.body.civilid,
          fullname: req.body.fullname,
          occupation: req.body.occupation,
          nationality: req.body.nationality,
          address: req.body.address,
          phone: req.body.phone,
          gender: req.body.gender,
          bloodgroup:req.body.bloodgroup,
          donorconsent: req.body.donorconsent,
         
          // createdAt: req.body.createdAt,assign value here
          // image: req.file.filename
        });
      
        Data.save()
          .then((data) => {
            // res.send(data);
            res.status(200).json({
              success: true,
              error: false,
              data: data,
            });
          })  .catch(() =>{
	res
  	.status(500)
  	.json({ success: false, error: true, message: 'Something went wrong' });
	// console.log(error);
  })
});


AddblooddonorRouter.get('/view-donorinfo', (req, res) => {
  AddblooddonorModel.find()
    .then((data) => {
      // res.send(data);
        res.status(200).json({
        success: true,
        error: false,
        data: data, // data
      });
    })
    .catch(() =>{
      // res.send(data);
        res.status(400).json({
        success: false,
        error: true,
        message: "data not found", // data
      });
    })
});

AddblooddonorRouter.get('/view-blooddonor/:id', (req, res) => {
 AddblooddonorModel.findOne({
    _id: req.params.id,
  })
    .then((data) => {
      // res.send(data);

      res.status(200).json({
        success: true,
        error: false,
        data: data,
      });
    })
    .catch((err) => console.log(err));
});



AddblooddonorRouter.put('/update-bloodDonor/:id', (req, res) => {
  AddblooddonorModel.findOne({
_id: req.params.id,
})
.then((data) => {
   
  data.fullname = req.body.fullname;
  data.phone = req.body.phone;
//   data.image = req.body.image;
  data.address = req.body.address;
  data.gender = req.body.gender;
  data.bloodgroup = req.body.bloodgroup;
  data.civilid = req.body.civilid;
  data.donorID = req.body.donorID;
  data.occupation=req.body.occupation;
  // data.image = req.file.filename;

  data
    .save()
    .then((data) => {
      res.status(200).json({
        success: true,
        error: false,
        data: data,
        message: 'updated successfully',
      });
    })
    .catch((err) => console.log(err));
})
.catch((err) => console.log(err));
});

AddblooddonorRouter.delete('/delete-donor/:id', (req, res) => {
  AddblooddonorModel.deleteOne({
    _id: req.params.id,
  })
    .then(() => {
      res.status(200).json({
        success: true,
        error: false,
        message: 'Deleted successfully',
      });
    })
    .catch((err) => console.log(err));
});





module.exports = AddblooddonorRouter;
