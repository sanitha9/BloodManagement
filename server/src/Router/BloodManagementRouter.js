const express = require('express');
const BloodManagementRouter = express.Router();

// const multer = require('multer');
const BloodManagementModel = require('../Models/BloodManagementModel');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public/upload/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// Add Employee
// employeeRouter.post('/add-employee', upload.single('image'), (req, res) => {
    


BloodManagementRouter.post('/add-user', (req, res) => {
  const Data = new BloodManagementModel({
    name: req.body.name,
    dob: req.body.dob,
    image: req.body.image,
    address: req.body.address,
    mobile: req.body.mobile,
    // createdAt: req.body.createdAt,assign value here
    // image: req.file.filename,
  });

  Data.save()
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

// view employee

BloodManagementRouter.get('/view-user', (req, res) => {
  BloodManagementModel.find()
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

// view single employee
BloodManagementRouter.get('/view-user/:id', (req, res) => {
  BloodManagementModel.findOne({
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


// update employee
// employeeRouter.put('/update-employee/:id',upload.single('image'),(req, res) => {
    BloodManagementRouter.put('/update-user/:id', (req, res) => {
      BloodManagementModel.findOne({
    _id: req.params.id,
  })
    .then((data) => {
       
      data.name = req.body.name;
      data.dob = req.body.dob;
    //   data.image = req.body.image;
      data.address = req.body.address;
      data.mobile = req.body.mobile;
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


//  delete employee
BloodManagementRouter.delete('/delete-user/:id', (req, res) => {
  BloodManagementModel.deleteOne({
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
BloodManagementRouter.delete('/delete-alluser', (req, res) => {
    BloodManagementModel.deleteMany()
    //   _id: req.params.id,
    // })
      .then(() => {
        res.status(200).json({
          success: true,
          error: false,
          message: 'Deleted successfully',
        });
      })
      .catch((err) => console.log(err));
  });

module.exports = BloodManagementRouter;