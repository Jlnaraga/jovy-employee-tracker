const {
viewAllEmployees,
getAllRoles,
} = require('../lib/queries')


const mainInquirer = [
{
    type: "list",
    message: "What would you like to do?",
    name: "selection",
    choices:[
        "View All Employees", 
        "Add Employee", 
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
    ]
}
];


const addRoleInquirer = [
{
    type: "input",
    message: "What is the name of the role?",
    name: "title"
}, 
{
    type: "input",
    message: "What is the salary of the role?",
    name: "salary"
}, 
{
    type: "list",
    message: "Which department does the role belong to?",
    name: "department_id",
    choices: async () => {
        const departments = await getAllDepartment();
        return departments.map(department => {
            return {
                value: department.id,
                name: department.name
            }
        });
    }
},
];


const addEmployeeInquirer = [
{
    type: "input",
    message: "What is the employee's first name?",
    name: "first_name"
}, 
{
    type: "input",
    message: "What is the employee's last name?",
    name: "last_name"
}, 
{
    type: "list",
    message: "What is the employee's role?",
    name: "role_id",
    choices: async () => {
        const roles = await getAllRoles();
        return roles.map(role => {
            return {
                value: role.id,
                name: role.title
            }
        });
    }
},
{
    type: "list",
    message: "Who is the employee's manager?",
    name: "manager_id",
    choices: async () => {
        const employees = await viewAllEmployees();
        return employees.map(employee => {
            return {
                value: employee.id,
                name: `${employee.first_name} ${employee.last_name}`
            }
        });
    }
},
];

const addDepartmentInquirer = [
{
    type: "input",
    message: "What is the name of the Department?",
    name: "name"
}, 
];

module.exports = {
mainInquirer,
addRoleInquirer,
addEmployeeInquirer,
addDepartmentInquirer
}

const {
getAllDepartment
} = require('../lib/queries')
module.exports = [
{
    type: 'list',
    message: "Which department you want to delete?",
    name: "department_id",
    choices: async () => {
        const departments = await getAllDepartment();
        return departments.map(department => {
            return {
                value: department.id,
                name: department.name
            }
        });
    }
},
]

const {
    viewAllEmployees
} = require('../lib/queries')
module.exports = [
    {
        type: "list",
        message: "Which employee you want to delete?",
        name: "employee_id",
        choices: async () => {
            const employees = await viewAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    },

]
const {
    getAllRoles
} = require("../lib/queries")
module.exports = [
    {
        type: "list",
        message: "Which role you want to delete?",
        name: "role_id",
        choices: async () => {
            const roles = await getAllRoles();
            console.log(roles)
            return roles.map(role => {
                return {
                    value: role.id,
                    name: role.title
                }
            });
        }
    },
];

