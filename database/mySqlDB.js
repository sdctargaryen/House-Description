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
  propertyInfo_title: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  propertyInfo_location: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  propertyInfo_propType: {
    type: Sequelize.STRING(30),
    allowNull: true
  },
  propertyInfo_numGuests: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  beds_quantity: {
    type: Sequelize.INTEGER,
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
  host_name: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  host_pictureUrl: {
    type: Sequelize.STRING(100),
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