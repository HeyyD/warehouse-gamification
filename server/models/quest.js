
module.exports = (sequelize, DataTypes) => {
  var Quest = sequelize.define('Quest', {
    title: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    isComplete: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
  });

  Quest.associate = function(models) {
    models.Quest.hasMany(models.User);
  };

  return Quest;
};
