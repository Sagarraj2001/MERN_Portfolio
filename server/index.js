const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const msgRouter=require("./Routes/MessageRoute");
require("./Db");

const app=express();
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(bodyParser.json());


app.use("/api",msgRouter);

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
})