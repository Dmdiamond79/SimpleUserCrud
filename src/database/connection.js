const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: '121212',
    host: 'localhost',
    port: 5432,
    database: 'homework_nextjs',
});

module.exports = sequelize;