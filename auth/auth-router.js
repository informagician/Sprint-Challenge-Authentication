const router = require('express').Router();
const Auth = require('./auth-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res) => {
  if(req.body.username && req.body.password){
    req.body.password = bcrypt.hashSync(req.body.password, 13)
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
  if(req.body.username && req.body.password){
    Auth.login(req.body)
    .then(user => {
      if(user && bcrypt.compareSync(req.body.password, user.password)){
        const token = generateToken(user)
        res.status(200).json({token:token})
      } else {
        res.status(401).json({message:'Invalid Username and Password'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({message:'Something went wrong during Login'})
    })
  } else {
    res.status(400).json({message:'Username and Password Required'})
  }
});

module.exports = router;


function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  }
  const secret = 'abcdefghijklmnopqrst1234567890'
  const options = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, secret, options)
}