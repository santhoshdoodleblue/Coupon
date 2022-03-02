//npm 
const express =require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

//route 
const CouponRoute=require('./routes/coupon')

//mongodb connection
mongoose.connect('mongodb+srv://santhosh:santhosh123@usercluster.r3wiz.mongodb.net/userDB?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true})
const db= mongoose.connection 

db.on('error',(err)=> {
    console.log('err',err)
})

db.once('open',()=> {
    console.log('Database Connected!')
})

//explicit call 
const server= express()
server.use(morgan('dev'))
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

//http request
// server.get('/',(req ,res)=>{
//     res.send('Http get request');
// })

//assign port
const PORT = process.env.PORT ||3002
server.listen(PORT, ()=> {
    console.log(`NodeJS Server is running on port ${PORT}`)
})

//route call
server.use('/api/coupon',CouponRoute)






