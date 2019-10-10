const path = require('path');
const userController = {};
const { User } = require('../models/database').models;

/**
 * @Path server -> userRouter -> userController - userRouter
 * @Method -> POST
 * @Endpoint -> "/login"
*/
userController.createUser = (req, res, next) => {
  console.log('\n*********** userController.createUser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} `);
  
  const { username, password } = req.body;
  User.create({username, password})
    .then(user => {
      console.log("\nNEW USER ------------------\n", user.get())
      res.locals.user = user.get()
      next()
    })
  .catch(err => {
    next({
      location: 'userController.createUser',
      error: err.message,
      status: 500
    })
  })
}

module.exports = userController;