const express = require('express');
const DonorActivityRouter = express.Router();
// const bcrypt = require('bcryptjs');

const DonorActivityModel = require('../Models/DonorActivityModel');
// const Logindata = require('../Models/LoginModel');
DonorActivityRouter.post('/add-donoractivity', async (req, res) => {
  const dateString = req.body.dateofdonation;
  const date = new Date(dateString);
  const formattedDate = date.toISOString().split('T')[0];
        const Data = new DonorActivityModel({


          
            donorid:req.body.donorid,
          dateofdonation:formattedDate,
          donorstatus:req.body.donorstatus,
          placeofdonation:req.body.placeofdonation,
          typeofdonation:req.body.typeofdonation,
          comments:req.body.comments,
          temparature:req.body.temparature,
          weight:req.body.weight,
          height:req.body.height,
        //   fullname: req.body.fullname,
        //   occupation: req.body.occupation,
        //   nationality: req.body.nationality,
        //   address: req.body.address,
        //   phone: req.body.phone,
        //   gender: req.body.gender,
        //   bloodgroup:req.body.bloodgroup,
        //   donorconsent: req.body.donorconsent,
         
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
DonorActivityRouter.get('/view-donoractivity', (req, res) => {
  DonorActivityModel.find()
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








module.exports = DonorActivityRouter;
