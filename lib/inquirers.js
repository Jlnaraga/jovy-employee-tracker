const {
    getAllDepartment,
    getAllEmployees,
    getAllRoles
} = require('./data')

const main = [
    {
        type: "list",
        message: "What would you like to do?",
        name: "selection",
        choices:[
            "View All Employees", 
            "View Employees by Department",
            "View Employees by Manager",
            "Add Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "Delete Employee", 
            "View All Roles",
            "Add Role",
            "Delete Role", 
            "View All Departments",
            "View Department's Budget",
            "Add Department",
            "Delete Department", 
            "Quit",
        ]
    }
];

const addDepartment = [
    {
        type: "input",
        message: "What is the name of the Department?",
        name: "name"
    }, 
];

const addEmployee = [
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
            const employees = await getAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    },
];

const addRole = [
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

const deleteDepartment = [
    {
        type: "list",
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
];

const deleteEmployee = [
    {
        type: "list",
        message: "Which employee you want to delete?",
        name: "employee_id",
        choices: async () => {
            const employees = await getAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    }, 
];

const deleteRole = [
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

const updateEmployeeManager = [
    {
        type: "list",
        message: "Which employee's manager do you want to update?",
        name: "employee_id",
        choices: async () => {
            const employees = await getAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    },
    {
        type: "list",
        message: "Which manager do you want to assign the selected employee?",
        name: "manager_id",
        choices: async (answers) => {
            console.log(answers)
            const employees = await getAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    },
];

const updateEmployeeRole = [
    {
        type: "list",
        message: "Which employee's role do you want to update?",
        name: "employee_id",
        choices: async () => {
            const employees = await getAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    },
    {
        type: "list",
        message: "Which role do you want to assign the selected employee?",
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
];

const viewEmployeesByDepartment = [
    {
        type: "list",
        message: "Which department's employees you want to view?",
        name: "department_id",
        choices: async () =>
        {
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

const viewEmployeesByManager = [
    {
        type: "list",
        message: "Which manager's employees you want to view?",
        name: "manager_id",
        choices: async () => {
            const employees = await getAllEmployees();
            return employees.map(employee => {
                return {
                    value: employee.id,
                    name: `${employee.first_name} ${employee.last_name}`
                }
            });
        }
    }, 
];

module.exports = {
    main,
    addDepartment,
    addEmployee,
    addRole,
    deleteDepartment,
    deleteEmployee,
    deleteRole,
    updateEmployeeManager,
    updateEmployeeRole,
    viewEmployeesByDepartment,
    viewEmployeesByManager
};
