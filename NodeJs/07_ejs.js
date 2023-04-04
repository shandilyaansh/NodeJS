const express=require('express');
const path=require('path');

const app=express();
app.set('view engine','ejs');
app.get('/profile',(_,res)=>{
    const user={
        name:'Anshu Kumar',
        email:'ajh452@gmail.com',
        city:'Samastipur',
        skills:['html','CSS','JS','C++','Java',"Node"],
        state:'Bihar'
    }
    res.render('profile',{user});
})
app.listen(5200);