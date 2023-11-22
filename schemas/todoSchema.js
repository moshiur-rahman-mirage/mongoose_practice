const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        enum:['active','inactive']
    }
})

module.exports=todoSchema;