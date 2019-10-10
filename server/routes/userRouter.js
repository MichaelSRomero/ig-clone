const router = require('express').Router();
const userController = require('../controllers/userController')

router.post('/', userController.createUser, (req, res, next) => {
  
})

module.exports = router