const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const secret = require('../secret/db.json');

let db = {};

// ORM connection
const sequelize = new Sequelize('warehouseDB', secret.username, secret.password, {
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

// Wonky code that reads all .js files in this directory, 
// loads them as sequalize models and links them to the db object
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

// Add table dependencies - User has many Quests etc.
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;




  
