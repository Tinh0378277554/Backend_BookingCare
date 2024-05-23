const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('tinhdevcode', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,
    logging: false
});

// let connectDB = () => {
//     sequelize.authenticate()
//         .then(() => {
//             console.log('Connection has been established successfully.');
//         })
//         .catch(err => {
//             console.error('Unable to connect to the database:', err);
//         });
// }

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;

