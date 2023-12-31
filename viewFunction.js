const connection = require("./config/connection.js");

const viewAllEmployees = () => {
  connection.query(
    `SELECT  employee.id AS "id",
  employee.first_name AS "First Name",
          employee.last_name AS "Last Name",
          role.title AS "Title",
          department.name AS "Department",
          role.salary AS "Salary",
          CONCAT(manager.first_name,' ' ,manager.last_name) AS "Manager"
  FROM    employee
  JOIN    role 
  ON employee.role_id = role.id
  JOIN    department
  on role.department_id = department.id
  LEFT JOIN   employee AS manager
  ON employee.manager_id = manager.id
  ORDER BY employee.id;`,
    (err, results) => {
      if (err) {
        console.error("Error fetching employees: ", err);
      } else {
        // Display the list of employees
        console.table(results);
      }
    }
  );
};

const viewAllDepartments = () => {
  connection.query(
    `SELECT name AS "Department Name" FROM department`,
    (err, results) => {
      if (err) {
        console.error("Error fetching departments: ", err);
      } else {
        // Display the list of departments
        console.table(results);
      }
    }
  );
};

const viewAllRoles = () => {
  connection.query(
    `SELECT role.title, role.salary, department.name AS "Department" FROM role
  JOIN department on role.department_id = department.id`,
    (err, results) => {
      if (err) {
        console.error("Error fetching roles: ", err);
      } else {
        // Display the list of roles
        console.table(results);
      }
    }
  );
};

module.exports = { viewAllEmployees, viewAllDepartments, viewAllRoles };
