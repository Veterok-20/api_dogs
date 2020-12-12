const { Sequelize } = require('sequelize')
const dogInitFunc = require('./Dog')

const sequelize = new Sequelize('animals_ov4_Zoya', 'Zoya_ov4', 'H587ta',  {
    host: '109.206.169.221',
    dialect: 'mysql'
});

const Dog = dogInitFunc(sequelize)

module.exports = {
    sequelize,
    Dog
}