const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

/** 
* @param sequelize is a Sequelize instance that will be used to created models via #define
* @param DataTypes is an object we recieve by default when using 'sequelize.import(file-path)'
* @return a User Model
*/
const User = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING, 
      unique: true,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    }
  }, {
    hooks: {
      beforeCreate: beforeCreate
    }
  })
  return User;
}

// hashing password for users
const beforeCreate = ('beforeCreate', (user, options) => {
  console.log("\n **************** INSIDE BEFORECREATE HOOK ***************")
  return bcrypt.hash(user.password, SALT_WORK_FACTOR)
    .then(hashedPassword => {
      user.password = hashedPassword;
    })
    .catch(err => {
      console.error("Error during hashing password: ", err.message)
    })
})

module.exports = User;