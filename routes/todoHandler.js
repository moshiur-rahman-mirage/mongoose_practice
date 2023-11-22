const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const todoSchema = require('../schemas/todoSchema')


// model
const Todo = new mongoose.model("Todo", todoSchema);




// get all
router.get('/', async (req, res) => {

})

// get one by id
router.get('/:id', async (req, res) => {

})

// post one
router.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
       
       const savedInstance= await newTodo.save()
        res.json(savedInstance);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// get multipler
router.post('/all', async (req, res) => {
    Todo.insertMany(req.body)
  .then((result) => {
    console.log('Documents inserted successfully:', result);
  })
  .catch((error) => {
    console.error('Error inserting documents:', error);
  });
})

// put todo
router.put('/:id', async (req, res) => {

})

// delete
router.delete('/:id', async (req, res) => {

})


module.exports = router;