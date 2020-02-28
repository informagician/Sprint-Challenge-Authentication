const router = require('express').Router();
const Auth = require('./auth-model')

router.post('/register', (req, res) => {
  if(req.body.username && req.body.password){
    Auth.register(req.body)
    .then(id => {
      res.status(201).json({message:`user with id ${id} created.`})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message:'something went wrong during user registration'})
    })
  } else {
    res.status(400).json('Bad Request')
  }
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
