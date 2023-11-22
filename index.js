// import packages
const express = require('express')
const mongoose = require('mongoose')
const todoHandler = require('./routes/todoHandler')
// express initialization
const app=express();
app.use(express.json());

mongoose.connect('mongodb+srv://librarian:Ms121212@cluster0.hhabjy4.mongodb.net/?retryWrites=true&w=majority',{ 
    dbName: 'TODOS'
})
.then(()=>{
    console.log('connection successful!')
})
.catch((error)=>{
    console.log(error)
})



app.use('/todo',todoHandler);


app.listen(3000,()=>{
    console.log('toto running')
})
