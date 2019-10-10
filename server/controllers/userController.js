const path = require('path');
const userController = {};
const { User } = require('../models/database').models;

/**
 * @Path server -> userRouter -> userController - userRouter
 * @Method -> POST
 * @Endpoint -> "accounts/signup"
*/
userController.createUser = (req, res, next) => {
  console.log('\n*********** userController.createUser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} `);

  const { username, password } = req.body;
  User.create({username, password})
    .then(user => {
      console.log("\nNEW USER ------------------\n", user.get())
      const { id, username } = user.get()
      res.locals.user = { id, username }
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

/**
 * @Path server -> userRouter -> userController - userRouter
 * @Method -> POST
 * @Endpoint -> "accounts/login"
*/
userController.verifyUser = (req, res, next) => {
  console.log('\n*********** userController.verifyUser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} `);
  
  const { username, password } = req.body;
  User.findOne({where: { username }})
    .then(async user => {
      // User exist in database & its the correct password
      if (user && await user.validPassword(password)) {
        const { id, username } = user.get()
        res.locals.user = { id, username }
        return next()
      }
      // TODO: Possibly redirect 
      res.status(401).json({message: 'Invalid username or password', status: 'unauthorized'})
    })
    .catch(err => {
      next({
        location: 'userController.verifyUser',
        error: err.message,
        status: 500
      })
    })
}

module.exports = userController;