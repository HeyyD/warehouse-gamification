module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
    isManager: DataTypes.BOOLEAN,
  });

  
  User.associate = function (models) {
    // Links the User table with Quest table by many to many relation through UserQuest table
    models.User.belongsToMany(models.Quest, {
      as: 'quests',
      through: 'QuestLink',
      onDelete: 'CASCADE',
      foreignKey: 'userId',
      otherKey: 'questId'

    });
  };

  return User;
};
