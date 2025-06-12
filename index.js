//BY ANVIT
const express= require('express');
const app=express();
app.use(express.json());
const dotenv=require("dotenv");
const schoolRoutes=require('./routes/schoolRoutes');
dotenv.config();
app.get('/',(req,res)=>{
    res.send("welcome");
})
app.use('/api/school',schoolRoutes);
const port=process.env.PORT||7000;
app.listen(port,()=>{
    console.log(`listen on ${port}`);
})

