
module.exports = (sequelize, DataTypes) => {
  var Quest = sequelize.define('Quest', {
    title: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    isComplete: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
  });

  Quest.associate = function(models) {
      // Links the User table with Quest table by many to many relation through UserQuest table
      models.Quest.belongsToMany(models.User, {
        as: 'users',
        through: 'QuestLink',
        onDelete: 'CASCADE',
        foreignKey: 'questId',
        otherKey: 'userId'
      });
  }

  return Quest;
};
