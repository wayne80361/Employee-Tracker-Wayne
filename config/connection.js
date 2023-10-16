const inquirer = require("inquirer");
const mysql = require("mysql2");
const cyanColor = "\x1b[36m";
const greenColor = "\x1b[32m";
const whiteColor = "\x1b[37m";
require("dotenv").config();

// create connection to database
const connection = mysql.createConnection(
  {
    host: "localhost",
    user: process.env.user,
    password: process.env.pass,
    database: process.env.db_name,
  },
  console.log(
    `${cyanColor}Connected to the ${greenColor}businesses_db ${cyanColor}database${whiteColor}`
  )
);

module.exports = connection;
