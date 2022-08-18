const inquirer = require('inquirer');
const fs = require('fs');
const {} = require('./lib/data');
const consoleTable = require('console.table');

connection.connect(function (err) {
  if (err) throw err;
  initialAction();
})

// Give the user a welcome message.
console.table(
  "\n------------ EMPLOYEE TRACKER ------------\n"
)


const questions = [
  {
    type: 'list',
    name: 'select',
    message: 'What would you like to do?',
    choices: [
      "View All Employees",
      "Add Employee",
      "Update Employee Role",
      "View All Roles",
      "Add Role",
      "View All Department",
      "Add Department",
      "Quit"
    ]
  },
  {
    type: 'input',
    name: 'department',
    message: 'What is the name of the Department?',
    when: (answers) => answers.select === 'Add Department'
  },
  {
    type: 'input',
    name: 'role',
    message: 'What is the name of the role?',
    when: (answers) => answers.select === ' Add Role'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the role?',
    when: (answers) => answers.select === 'Add Role'
  },
  {
    type: 'list',
    name: 'select',
    message: 'Which department does the role belong to?',
    choices: () => [
      "Engineering",
      "Finance",
      "Legal",
      "Sales",
      "Service"
    ],
    when: (answers) => answers.select === 'Add Role'
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the employee first name?',
    when: (answers) => answers.select === 'Add Employee'
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the employee last name?',
    when: (answers) => answers.select === 'Add Employee'
  },
  {
    type: 'input',
    name: 'role',
    message: 'What is the employee role?',
    choices: () => [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team lead",
      "Lawyer",
      "Customer Service"
    ],
    when: (answers) => answers.select === 'Add Employee'
  },
  {
    type: 'list',
    name: 'select',
    message: 'Who is the employee manager?',
    choices: () => [
      "None",
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Kunal Singh",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen"
    ],
    when: (answers) => answers.select === 'Add Role'
  },
  {
    type: 'list',
    name: 'select',
    message: 'Which employee role do you want to update?',
    choices: () => [
      "None",
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Kunal Singh",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen"
    ],
    when: (answers) => answers.select === 'Update Employee Role'
  },
  {
    type: 'list',
    name: 'select',
    message: 'Which role do you want to assign the selected employee?',
    choices: () => [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team lead",
      "Lawyer",
      "Customer Service"
    ],
    when: (answers) => answers.select === 'Add Update Role'
  },
  {
    type: 'confirm',
    name: 'select',
    message: 'Do you want to quit?',
    when: (answers) => answers.select === 'Quit'
  },
];

function init () {

  return inquirer.prompt (questions).then ((answers) => {
    if (answers.isFinished === false) {
    }
    else{
      return init();
    }
  })
  
}

init();
