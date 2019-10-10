const path = require('path');
const userController = {};

/**
 * @Path server -> userRouter -> userController
 * @Method -> POST
 * @Endpoint -> "/login"
*/
userController.createUser = (req, res, next) => {
  console.log('\n*********** userController.createUser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} `);

  next()
}

module.exports = userController;