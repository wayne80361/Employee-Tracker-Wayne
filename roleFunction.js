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

const updateRole = (updateRoleData) => {
  const roleId = updateRoleData.role_id;
  const employeeId = updateRoleData.employee_id;
  // delete updateRoleData.role_id;
  // delete updateRoleData.employee_id;

  connection.query(
    "UPDATE employee SET role_id = ? WHERE id = ?",
    [roleId, employeeId],
    (err, results) => {
      if (err) {
        console.error("Error updating role: ", err);
      } else {
        console.log("Role updated successfully!");
      }
    }
  );
};

module.exports = { addRole, updateRole };
