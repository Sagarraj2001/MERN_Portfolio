const mongoose=require("mongoose");

const portfolioSchema=new mongoose.Schema({
  email:{
    type:String,
    require:true
  },
  message:{
    type:String
  }
});

const PortfolioModel=mongoose.model("portfolioData",portfolioSchema);

module.exports=PortfolioModel;