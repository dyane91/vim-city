const Sequelize = require('sequelize')
const db = require('../db')

const Challenge = db.define('challenge', {
  vimCommand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  instructions: {
    type: Sequelize.TEXT
  },
  code: {
    type: Sequelize.TEXT
  },
  points: {
    type: Sequelize.INTEGER
  },
  level: {
    type: Sequelize.INTEGER,
    default: 0
  },
  startingCoordinates: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  activeColliders: {
    type: Sequelize.ARRAY(Sequelize.BOOLEAN)
  }
})

module.exports = Challenge
