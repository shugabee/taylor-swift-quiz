require("dotenv").config();
const { Sequelize } = require('sequelize');


const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });


  const getSong = (req, res) => {
    sequelize.query(`SELECT song_id, name, album 
    FROM songs 
    ORDER BY RANDOM()
    Limit 1`)
    .then(([data]) => {
        res.status(200).send(data)
    })
    .catch(error => console.log(error))
  };


  module.exports = {
    getSong
  }


