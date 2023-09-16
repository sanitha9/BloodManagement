const express = require('express')

const app = express()
const mongoose = require ('mongoose');
const BloodManagementRouter = require('./src/Router/BloodManagementRouter');
const RegisterRouter = require('./src/Router/RegisterRouter');
const LoginRouter = require('./src/Router/LoginRouter');
const CheckAuth = require('./src/Middlewares/CheckAuth');
const VerifyAccess = require('./src/Middlewares/VerifyAccess');
const cors = require('cors');
const AddblooddonorRouter = require('./src/Router/AddblooddonorRouter');
const DonorActivityRouter = require('./src/Router/DonorActivityRouter');
// const Booksrouter = require('./src/Routes/Booksrouter');
app.use(cors())
mongoose.connect("mongodb+srv://sanisandhya7:12345@bloodmanagement.nlhshu6.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log(error);
})
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/blood',BloodManagementRouter)

app.use('/api/register',RegisterRouter)
app.use('/api/login',LoginRouter)
app.use('/api/add',AddblooddonorRouter)
app.use('/api/donoractivity',DonorActivityRouter)
app.get('/home',CheckAuth,VerifyAccess,(req,res)=>{
    res.send("This is home page")
})

app.listen(5000,()=>{
    console.log('server started');
})