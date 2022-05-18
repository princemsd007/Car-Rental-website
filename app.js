const express = require('express')
const app = express()
const mongoose = require('mongoose')
const carorder = require('./carorder.js')
const path = require('path')
const { exec } = require('child_process')
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname))
mongoose.connect('mongodb://127.0.0.1:27017/carorder')
    .then(()=>{
    console.log("Database Connected Successfully")
    exec('mkdir welcome')
    })
    .catch(err => {
        console.log('Database Unable to Connect')
        console.log(err)
    })
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
})
app.post('/additem', async(req,res)=>{
    const orderbody = new carorder(req.body);
    await orderbody.save();
    res.redirect('/')
})
app.get('/showorders',async(req,res)=>{
    const orders = await carorder.find({})
    res.render('orderdata',{orders})
})

app.listen(8000,()=>{
    console.log('listening on 8000')
})