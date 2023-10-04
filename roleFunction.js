const connection = require("./config/connection.js");

const addRole = (roleData) => {
  connection.query("INSERT INTO role SET ?", roleData, (err, results) => {
    if (err) {
      console.error("Error adding role: ");
    } else {
      console.log("Role added successfully!");
    }
  });
};

module.exports = { addRole };
