const express = require('express');
router = express.Router();


//Get alist of Ninja
router.get('/ninjas', (req, res) => {
  res.send({type: 'GET'})
})

//Add a new ninja
router.post('/ninjas', (req, res) =>{
  console.log(req.body)
  res.send({
    type: 'POST',
    name: req.body.name,
    age: req.body.age
  })
})

//Update a ninja
router.put('/ninjas/:id', (req, res) => {
  res.send({type: 'PUT'})
})

//Delete a ninja
router.delete('/ninjas/:id', (req, res) => {
  res.send({type: 'DELETE'})
})

module.exports = router;