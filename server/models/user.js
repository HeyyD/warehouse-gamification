module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
  });

  
  User.associate = function (models) {
    // Links the User table with Quest table by many to many relation through UserQuest table
    models.User.belongsToMany(models.Quest, {
      as: 'quests',
      through: 'UserQuest',
      onDelete: 'CASCADE'
    });
  };

  return User;
};
