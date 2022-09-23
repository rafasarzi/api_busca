'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chamada = sequelize.define('Chamada', {
    name: DataTypes.STRING,
    data: DataTypes.STRING
  }, {});
  Chamada.associate = function(models) {
    Chamada.belongsTo(models.Users, {
        foreignKey: 'postId'
      })
  };
  return Chamada;
};