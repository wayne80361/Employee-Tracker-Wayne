const inquirer = require("inquirer");

const { addEmployee } = require("./employeeFunction.js");
const { addRole, updateRole } = require("./roleFunction.js");
const { addDepartment } = require("./departmentFunction.js");
// const { updateRole } = require("./roleFunction.js");
const { viewAllEmployees } = require("./viewFunction.js");
const connection = require("./config/connection.js");

const employeeQuestions = [
  {
    type: "input",
    name: "first_name",
    message: "Enter the first name of the employee:",
  },
  {
    type: "input",
    name: "last_name",
    message: "Enter the last name of the employee:",
  },
  {
    type: "list",
    name: "manager_id",
    message: 'Select the employee\'s manager (or choose "None"):',
    choices: [],
  },
  {
    type: "list",
    name: "role_id",
    message: "Select the employee's role:",
    choices: [],
  },
  // Add more questions for role selection if needed
];

const roleQuestions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the role:",
  },
  {
    type: "input",
    name: "salary",
    message: "Enter the salary for the role:",
  },
  {
    type: "list",
    name: "department_id",
    message: "Which department does the role belong to:",
    choices: [],
  },
  // Add more questions as needed
];

const departmentQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the name of the department:",
  },
  // Add more questions as needed
];

const updateRoleQuestions = [
  {
    type: "list",
    name: "employee_id",
    message: "Which employee's role do you want to update:",
    choices: [],
  },
  {
    type: "list",
    name: "role_id",
    message: "Which role do you want to assign to:",
    choices: [],
  },
];

const getRoleList = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT id, title FROM role", (err, results) => {
      if (err) {
        reject(err);
      } else {
        // map the list of existing roles for selection
        const roleList = results.map((role) => ({
          name: role.title,
          value: role.id,
        }));
        resolve(roleList);
      }
    });
  });
};

const getEmployeeList = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      'SELECT id, CONCAT(first_name, " ", last_name) AS full_name FROM employee',
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          // map the list of existing employees for manager selection
          const employeeList = results.map((employee) => ({
            name: employee.full_name,
            value: employee.id,
          }));
          // Add the "None" option to the list of employees
          employeeList.unshift({ name: "None", value: null });
          resolve(employeeList);
        }
      }
    );
  });
};

const getDepartmentList = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT id, name FROM department", (err, results) => {
      if (err) {
        reject(err);
      } else {
        // map the list of existing departments for selection
        const departmentList = results.map((department) => ({
          name: department.name,
          value: department.id,
        }));
        resolve(departmentList);
      }
    });
  });
};

const init = async () => {
  // Get the list of existing employees for manager selection
  const employeeList = await getEmployeeList();
  employeeQuestions[2].choices = employeeList;
  // Add the employee choices to the employeeQuestions
  //   employeeQuestions[2] = {
  //     type: "list",
  //     name: "manager_id",
  //     message: 'Select the employee\'s manager (or choose "None"):',
  //     choices: employeeList,
  //   };
  const roleList = await getRoleList();
  employeeQuestions[3].choices = roleList;

  updateRoleQuestions[0].choices = employeeList;
  updateRoleQuestions[1].choices = roleList;
  //   employeeQuestions[3] = {
  //     type: "list",
  //     name: "role_id",
  //     message: "Select the employee's role:",
  //     choices: roleList,
  //   };
  const departmentList = await getDepartmentList();
  roleQuestions[2].choices = departmentList;

  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "Add Employee",
          "Add Role",
          "Add Department",
          "Update Role",
          "View All Employee",
        ],
      },
    ])
    .then((answers) => {
      if (answers.action === "Add Employee") {
        inquirer.prompt(employeeQuestions).then((employeeData) => {
          addEmployee(employeeData);
        });
      } else if (answers.action === "Add Role") {
        inquirer.prompt(roleQuestions).then((roleData) => {
          addRole(roleData);
        });
      } else if (answers.action === "Add Department") {
        inquirer.prompt(departmentQuestions).then((departmentData) => {
          addDepartment(departmentData);
        });
      } else if (answers.action === "Update Role") {
        inquirer.prompt(updateRoleQuestions).then((updateRoleData) => {
          updateRole(updateRoleData);
        });
      } else if (answers.action === "View All Employee") {
        viewAllEmployees();
      }
    });
};
init();
