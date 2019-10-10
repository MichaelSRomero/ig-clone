const router = require('express').Router();
const userController = require('../controllers/userController')
 
router.post('/signup', userController.createUser, (req, res, next) => {
  res.status(200).json(res.locals.user)
})
router.post('/login', userController.verifyUser, (req, res, next) => {
  res.status(200).json({account: res.locals.user, validated: true})
})

module.exports = router