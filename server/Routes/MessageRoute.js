const express=require("express");
const  {message}=require("../Controller/Message");

const router=express.Router();

router.post("/contact",message);

module.exports=router;