module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
  });

  User.associate = function (models) {
    models.User.belongsTo(models.Quest, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

//   User.associate = function(models) {
//     models.User.hasMany(models.Task);
//   };

  return User;
};
