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

  /**
   * @returns true/false if password is valid
   */
  User.prototype.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
  }
  return User;
}

// hashing password for users
const beforeCreate = ('beforeCreate', async (user, options) => {
  console.log("\n **************** INSIDE BEFORECREATE HOOK ***************")
  user.password = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
})


module.exports = User;