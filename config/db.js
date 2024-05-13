const mongoose=require('mongoose')

 function MongoConnect(){
    mongoose.connect(process.env.MONGOURI)
    .then(()=>{
        console.log("MongoDB Connected ...!");
    })
    .catch((err)=>{
        console.log("Mongodb Error",err)
    }); 
 }

module.exports=MongoConnect

