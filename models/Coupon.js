const mongoose=require('mongoose')
const Schema=mongoose.Schema

const couponSchema=new Schema({
    offerName:{
        type:String,
        required:true
    },
    couponCode:{
        type:String,
        required:true,
        unique:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    discountPercentage:{
        type:Number,
        required:true
    },
    discountAmount:{
        type:Number,
        required:true
    },
    terms:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    status:{
        type:Boolean
    },
    createdTo:{
        type:String
    }
},{timestamps:true})

const Coupon=mongoose.model('couponDetails',couponSchema)
module.exports=Coupon
