const inquirer = require("inquirer");
const mysql = require("mysql2");
const cyanColor = "\x1b[36m";
const greenColor = "\x1b[32m";
const whiteColor = "\x1b[37m";

// create connection to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "1234",
    database: "businesses_db",
  },
  console.log(
    `${cyanColor}Connected to the ${greenColor}businesses_db ${cyanColor}database${whiteColor}`
  )
);
