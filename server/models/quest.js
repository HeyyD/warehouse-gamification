
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

//   Quest.associate = function (models) {
//     models.Task.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

  return Quest;
};

  
  
//   // Define the 'Quest' model
//   const QuestModel = warehouseDB.define('quest', {
//     title: Sequelize.STRING,
//     dueDate: Sequelize.DATE,
//     isComplete: Sequelize.BOOLEAN,
//     description: Sequelize.TEXT,
//   });
//   QuestModel.hasMany(UserModel);
