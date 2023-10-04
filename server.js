const inquirer = require("inquirer");

const { addEmployee } = require("./employeeFunction.js");

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

const managerQuestions = [
  {
    type: "input",
    name: "manager_name",
    message: "Enter the name of the manager:",
  },
  // Add more questions as needed
];
