'use strict'
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    login: DataTypes.STRING,
    avatar_url: DataTypes.STRING,
    followers: DataTypes.STRING,
    following: DataTypes.STRING

  }, {})
  Users.associate = function(models) {
    Users.hasMany(models.Chamada, {
      foreignKey: 'postId'
    })
  }
  return Users
}