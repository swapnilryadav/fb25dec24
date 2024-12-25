const express=require('express');
const cors=require('cors');
const fs=require('fs');

const app=express();

app.use(cors());

app.get("/find",(req,res)=>{
    let n =parseFloat(req.query.number);
   let r=n**0.5;
   let ans="Square root="+r.toFixed(2) ;
   let data ="number"+n+"-->"+new Date().toString()+"\n";
   fs.appendFile("result.txt",data,(err)=>{
    console.log(err);
   });
   res.json({"msg":ans});
});
app.listen(9000,()=>{console.log("Ready to serve @ 9000");});
