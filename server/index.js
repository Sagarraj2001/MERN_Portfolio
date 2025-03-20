const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const bodyParser=require("body-parser");
const msgRouter=require("./Routes/MessageRoute");
require("./Db");

const app=express();
dotenv.config();
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(bodyParser.json());


app.use("/api",msgRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})