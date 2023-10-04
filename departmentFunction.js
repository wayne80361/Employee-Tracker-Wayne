const connection = require("./config/connection.js");

const addDepartment = (departmentData) => {
  connection.query(
    "INSERT INTO department SET ?",
    departmentData,
    (err, results) => {
      if (err) {
        console.error("Error adding Department");
      } else {
        console.log("Department added successfully!");
      }
    }
  );
};

module.exports = { addDepartment };
