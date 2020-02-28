/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken')

const secret = 'abcdefghijklmnopqrst1234567890'

module.exports = (req, res, next) => {

  if(req.headers.authorization){
    jwt.verify(req.headers.authorization, secret, (err,decodedToken) => {
      if(err){
        res.status(401).json({ message: 'Invalid Authorization' });
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  } else {
    res.status(400).json({ message: 'No Authorization Provided' });
  }
};
