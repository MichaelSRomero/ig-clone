const router = require('express').Router();
const userController = require('../controllers/userController')
 
router.post('/', userController.createUser, (req, res, next) => {
  res.status(200).json(res.locals.user)
})

module.exports = router