const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId


const userModel =  new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    delete:{
        type:Boolean,
        default:false
    },
    password:{
        type:String,
        require:true
    },
    displayname:{
        type:String,
        require:true
    },
},{ timestamps: true })

const user=mongoose.model('users',userModel)

module.exports={user};