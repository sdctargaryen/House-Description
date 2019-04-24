const Sequelize = require('sequelize');

const sequelize = new Sequelize('sharebnb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  logging: false,
  pool: { maxConnections: 5, maxIdleTime: 30}
});

sequelize
  .authenticate()
  .then(() => {
    console.log('MySql authenticated.');
  })
  .catch(err => {
    console.error('Unable to connect to MySql:', err);
  });


const HouseDescriptions = sequelize.define('housedescriptions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  propertyInfo: {
    type: Sequelize.JSON,
    allowNull: true
  },
  beds: {
    type: Sequelize.JSON,
    allowNull: true
  },
  amenities: {
    type: Sequelize.JSON,
    allowNull: true
  },
  numBaths: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  host: {
    type: Sequelize.JSON,
    allowNull: true
  },
  summary: {
    type: Sequelize.JSON,
    allowNull: true
  },
  __v: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}); 

sequelize.sync({force: false})
.then(()=>console.log('synced with MySql database'))
.catch(error => console.log(error));

module.exports = HouseDescriptions;