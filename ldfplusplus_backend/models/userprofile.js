const mongoose = require('mongoose')

const usertemplate = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image:{
        type:Buffer
    },
    adminstatus:{
        type:Boolean,
        default:false
    },
    status:{
        type:[String]
    },
    superadmin:{
        type:Boolean,
        default:false
    },
    resettoken:String,
    expiretoken:Date
})

module.exports = mongoose.model('userprofile', usertemplate)