const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
var secret = require('../secret/db.json');

let db        = {};

// ORM connection
var sequelize = new Sequelize('warehouseDB', secret.username, secret.password, {
    dialect: 'mssql', // SQLServer
    host: secret.address,
    port: 1433, // Default port
    encrypt: true,
    logging: false, 
    dialectOptions: {
      encrypt: true,
      requestTimeout: 10000
    }
});

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// warehouseDB.sync({force: true})
// .then(function() {

//     // Create demo: Create a User instance and save it to the database
//     UserModel.create({
//       username: 'Demon_Slayer99',
//       password: 'Shrestinian',
//       level: 12,
//       xp: 1251
//     })
//     .then(function(user) {
//         console.log('\nCreated User:', user.get({ plain: true}));

//         QuestModel.create({
//             title: 'Kill the Box Dragon!',
//             dueDate: new Date(2017,04,01),
//             isComplete: false,
//             description: "Just kill the dragon!"
//         })
//         .then(function(quest) {
//             console.log('\nCreated Quests:', quest.get({ plain: true}));

//             quest.setUsers([user])
//             .then(function() {
            
//                 // Read demo: find incomplete tasks assigned to user 'Anna''
//                 UserModel.findAll()
//                 .then(function(users) {
//                     console.log('all users: ', JSON.stringify(users));                    
//                 })
//             })
//         })
//     })
// })

module.exports = db;




  
