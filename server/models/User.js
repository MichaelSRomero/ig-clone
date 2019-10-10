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
  })
  return User;
}

module.exports = User;