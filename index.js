const inquirer = require('inquirer');
const {
    Department,
    Employee,
    Role
} = require('./lib/entities')
const {
    getAllDepartment,
    getAllEmployees,
    getAllRoles
} = require('./lib/queries');
const {
    createDepartment,
    createEmployee,
    createRole,
    updateEmployeeRole
} = require('./lib/mutations');


const {
    addDepartmentInquirer,
    addEmployeeInquirer,
    addRoleInquirer,
    updateEmployeeRoleInquirer,
    mainInquirer
} = require('./inquirers');


const viewAllEmployees = async () => {
    const employees = await getAllEmployees();
    console.table(employees);
    main(); // return to main
}


const addEmployee = () => {
    inquirer.prompt(addEmployeeInquirer).then(async (answers) => {
        const { first_name, last_name, role_id, manager_id } = answers;
        const employee = new Employee();
        employee.first_name = first_name;
        employee.last_name = last_name;
        employee.role_id = role_id;
        employee.manager_id = manager_id;
        await createEmployee(employee);
        main(); // return to main
    });
}


const updateEmployee = () => {
    inquirer.prompt(updateEmployeeRoleInquirer).then(async (answers) => {
        const { employee_id, role_id } = answers;
        const employee = new Employee();
        employee.id = employee_id;
        employee.role_id = role_id;
        await updateEmployeeRole(employee);
        main(); // return to main
    });
}


const viewAllRoles = async () => {
    const roles = await getAllRoles();
    console.table(roles);
    main(); // return to main
}


const addRole = () => {
    inquirer.prompt(addRoleInquirer).then(async (answers) => {
        const { title, salary, department_id } = answers;
        
        const role = new Role()
        role.title = title;
        role.salary = salary;
        role.department_id = department_id;
        await createRole(role);
        main(); // return to main
    });
}


const viewAllDepartment = async () => {
    const department = await getAllDepartment();
    console.table(department);
    main(); // return to main
}


const addDepartment = () => {
    inquirer.prompt(addDepartmentInquirer).then(async (answers) => {
        const { name } = answers;
        const department = new Department(
            id = undefined,
            name
        );
        await createDepartment(department);
        main(); // return to main
    });
}


const main = () => {
    inquirer.prompt(mainInquirer).then((answers) => {
        const { selection } = answers;
        if(selection === "View All Employees"){
            viewAllEmployees();
        }
        if(selection === "Add Employee"){
            addEmployee();
        }
        if(selection === "Update Employee Role"){
            updateEmployee();
        }
        if(selection === "View All Roles"){
            viewAllRoles();
        }
        if(selection === "Add Role"){
            addRole();
        }
        if(selection === "View All Departments"){
            viewAllDepartment();
        } 
        if(selection === "Add Department"){
            addDepartment();
        }
    });
}

main();