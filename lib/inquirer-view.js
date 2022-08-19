const inquirer = require('inquirer');

const prompt = require('./inquirers');

const Department = require('./class/department')
const Employee = require('./class/employee')
const Role = require('./class/role')

const {
    getAllDepartment,
    getAllEmployees,
    getAllEmployeesByDepartment,
    getAllEmployeesByManager,
    getAllRoles,
    getTotalBudgetByDepartment,
    createDepartment,
    createEmployee,
    createRole,
    deleteDepartment,
    deleteEmployee,
    deleteRole,
    updateEmployeeManager,
    updateEmployeeRole
} = require('./data');

const viewAllEmployees = async () => {
    const employees = await getAllEmployees();
    console.table(employees);
    main(); // return to main
}

const viewEmployeesByDepartment = async () => {
    inquirer.prompt(prompt.viewEmployeesByDepartment).then(async (answers) => {
        const { department_id } = answers;
        const employees = await getAllEmployeesByDepartment(department_id);
        console.table(employees);
    
        main(); // return to main
    });
    
}

const viewEmployeesByManager = async () => {
    inquirer.prompt(prompt.viewEmployeesByManager).then(async (answers) => {
        const { manager_id } = answers;
        const employees = await getAllEmployeesByManager(manager_id);
        console.table(employees);
        main(); // return to main
    });
    
}

const addEmployee = () => {
    inquirer.prompt(prompt.addEmployee).then(async (answers) => {
        const { first_name, last_name, role_id, manager_id } = answers;
        const employee = new Employee(first_name, last_name, role_id, manager_id);
        
        await createEmployee(employee);
        main(); // return to main
    });
}

const removeEmployee = () => { 
    inquirer.prompt(prompt.deleteEmployee).then(async (answers) => { 
        const { employee_id } = answers;
        await deleteEmployee(employee_id);
        main(); // return to main
    });
}

const updateMyRole = () => {
    inquirer.prompt(prompt.updateEmployeeRole).then(async (answers) => {
        const { employee_id, role_id } = answers;
        const employee = new Employee();
        employee.id = employee_id;
        employee.role_id = role_id;
        await updateEmployeeRole(employee);
        main(); // return to main
    });
}

const updateMyManager = () => {
    inquirer.prompt(prompt.updateEmployeeManager).then(async (answers) => {
        const { employee_id, manager_id } = answers;
        const employee = new Employee();
        employee.id = employee_id;
        employee.manager_id = manager_id;
        await updateEmployeeManager(employee);
        main(); // return to main
    });
}

const viewAllRoles = async () => {
    const roles = await getAllRoles();
    console.table(roles);
    main(); // return to main
}

const addRole = () => {
    inquirer.prompt(prompt.addRole).then(async (answers) => {
        const { title, salary, department_id } = answers;
        
        const role = new Role()
        role.title = title;
        role.salary = salary;
        role.department_id = department_id;
        await createRole(role);
        main(); // return to main
    });
}

const removeRole = () => { 
    inquirer.prompt(prompt.deleteRole).then(async (answers) => { 
        const { role_id } = answers;
        await deleteRole(role_id);
        main(); // return to main
    });
}

const viewAllDepartment = async () => {
    const department = await getAllDepartment();
    console.table(department);
    main(); // return to main
}

const viewBudgetByDepartment = async () => {
    const departments = await getTotalBudgetByDepartment();
    console.table(departments);
    main(); // return to main
}

const addDepartment = () => {
    inquirer.prompt(prompt.addDepartment).then(async (answers) => {
        const { name } = answers;
        const department = new Department();
        department.name = name;

        await createDepartment(department);
        
        main(); // return to main
    });
}

const removeDepartment = () => { 
    inquirer.prompt(prompt.deleteDepartment).then(async (answers) => { 
        const { department_id } = answers;
       await deleteDepartment(department_id);
        main(); // return to main
    });
}

const main = () => {
    inquirer.prompt(prompt.main).then((answers) => {
        const { selection } = answers;
  
        if(selection === "View All Employees"){
            viewAllEmployees();
        }
  
        if(selection === "View Employees by Department"){
            viewEmployeesByDepartment();
        }
        
        if(selection === "View Employees by Manager"){
            viewEmployeesByManager();
        }
  
        if(selection === "Add Employee"){
            addEmployee();
        }
  
        if(selection === "Delete Employee"){
            removeEmployee();
        }
  
        if(selection === "Update Employee Role"){
            updateMyRole();
        }
  
        if(selection === "Update Employee Manager"){
            updateMyManager();
        }
  
        if(selection === "View All Roles"){
            viewAllRoles();
        }
  
        if(selection === "Add Role"){
            addRole();
        }
  
        if(selection === "Delete Role"){
            removeRole();
        }
  
        if(selection === "View All Departments"){
            viewAllDepartment();
        } 
  
        if(selection === "View Department's Budget"){
            viewBudgetByDepartment();
        } 
        
        if(selection === "Add Department"){
            addDepartment();
        }
  
        if(selection === "Delete Department"){
            removeDepartment();
        }
    });
}

module.exports = main;
