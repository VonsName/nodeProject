const express=require('express');
const expressStatic=require('express-static');
const con=require('consolidate');
const app=express();
const mysql=require('mysql');
app.set('view engine','html');
app.set('views','./template');
app.engine('html',con.ejs);
mysql.createPool({host:'localhost',user:'root',password:'root',database:''})
app.route('/').get((req,res)=>{
    res.render('index.ejs',{banners:'aa'});
});

app.listen(8080);