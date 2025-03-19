const mongoose=require("mongoose");


const connection=async()=>{
    try{
        mongoose.connect("mongodb+srv://sagarraj19042001:Sagarraj%401234@cluster0.clhca.mongodb.net/portfolio");
        console.log("database connected");
    }
    
    catch(err){
        console.log(err);
    }
}

connection()