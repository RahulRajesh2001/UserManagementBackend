const express=require('express');
const app=express();
const cors=require('cors');
require('dotenv').config();
const userRoute=require('./routes/userRoute.js');
const adminRoute=require('./routes/adminRoute.js');
const MongoConnect=require('./config/db.js')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

MongoConnect()

app.use('/uploads',express.static('uploads'));

app.use("/user",userRoute);
app.use("/admin",adminRoute);

const port=process.env.PORT||4000;

app.listen(port,()=>{
    console.log(`Server running on port : ${port}`);
})