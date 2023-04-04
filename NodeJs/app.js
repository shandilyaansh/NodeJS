const express =require('express');
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'Public');

app.get('/help',(req,res)=>{
    res.send("Welcome to home Page");
})
app.get('',(_,res)=>{
    res.sendFile(publicPath+'/about.html');
})
app.get('*',(_,res)=>{
    res.sendFile(publicPath+'/404.html')
})
// app.use(express.static(publicPath));
app.listen(5000);