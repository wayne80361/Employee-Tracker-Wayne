const inquirer = require("inquirer");

const { addEmployee } = require("./employeeFunction.js");
const { addRole } = require("./roleFunction.js");

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
  // Add more questions for role and manager selection
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
  // Add more questions as needed
];

inquirer
  .prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: ["Add Employee", "Add Role"],
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
    }
  });
