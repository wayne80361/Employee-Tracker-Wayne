const connection = require("./config");

const addEmployee = (employeeData) => {
  connection.query(
    "INSERT INTO employee SET ?",
    employeeData,
    (err, results) => {
      if (err) {
        console.error("Error adding employee: ");
      } else {
        console.log("Employee added successfully!");
      }
    }
  );
};

module.exports = { addEmployee };
