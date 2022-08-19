const pool = require('./db');
const createDepartment = async (department) => {
    const { name } = department;
    await pool.query(
      'INSERT INTO Department SET ?',
      { name }
    );
}
const createEmployee = async (employee) => {
    const { first_name, last_name, role_id, manager_id } = employee;
    await pool.query(
      'INSERT INTO Employee SET ?',
      { first_name, last_name, role_id, manager_id }
    );
}
const createRole = async (role) => {
    const { title, salary, department_id } = role;
    await pool.query(
      'INSERT INTO Role SET ?',
      { title, salary, department_id }
    );
}
const updateEmployeeRole = async (employee) => {
    const { id, role_id } = employee;
    await pool.query(
      `UPDATE employee SET role_id = ${role_id} WHERE id = ${id}`
    );
}
module.exports = {
    createDepartment,
    createEmployee,
    createRole,
    updateEmployeeRole
}