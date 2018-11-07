const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const basename  = path.basename(__filename);
const secret = require('../secret/db.json');
const seed = require('./seed');

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

if (process.argv.filter.some((val, index, val) => val === "seed-db")) {
  seed(db);
}

module.exports = db;




  
