const pool = require('./db');

const getAllEmployeesByManager = async (manager_id) => {
    const result = await pool.query(`
        SELECT 
            e.id, 
            e.first_name,
            e.last_name,
            r.title,
            d.name as Department,
            r.salary,
            CONCAT(m.first_name, ' ', m.last_name) as manager
        FROM Employee e 
            LEFT JOIN Employee m on e.manager_id = m.id
            LEFT JOIN Role r on e.role_id = r.id
            LEFT JOIN Department d on r.department_id = d.id
        WHERE e.manager_id = ${manager_id}
    `);
    return result[0];
  
}

const getAllEmployeesByDepartment = async (department_id) => {
    const result = await pool.query(`
        SELECT 
            e.id, 
            e.first_name,
            e.last_name,
            r.title,
            d.name as Department,
            r.salary,
            CONCAT(m.first_name, ' ', m.last_name) as manager
        FROM Employee e 
            LEFT JOIN Employee m on e.manager_id = m.id
            LEFT JOIN Role r on e.role_id = r.id
            LEFT JOIN Department d on r.department_id = d.id
        WHERE r.department_id = ${department_id}
    `);
    return result[0];
  
}

const getAllEmployees = async () => {
    const result = await pool.query(`
        SELECT 
            e.id, 
            e.first_name,
            e.last_name,
            r.title,
            d.name department,
            r.salary,
            CONCAT(m.first_name, ' ', m.last_name) as manager
        FROM Employee e
            LEFT JOIN Employee m on e.manager_id = m.id
            LEFT JOIN Role r on e.role_id = r.id
            LEFT JOIN Department d on r.department_id = d.id
    `);
    return result[0];
  
}

const getAllDepartment = async () => {
    const result = await pool.query('SELECT * FROM Department');
    return result[0];
}

const getTotalBudgetByDepartment = async (department_id) => {
    const result = await pool.query(`
        SELECT 
            d.name as Department,
            SUM(r.salary) as Budget
        FROM Department d
            LEFT JOIN Role r on r.department_id = d.id
            LEFT JOIN Employee e on e.role_id = r.id
        GROUP BY d.name
    `);
    return result[0];
  
}

const getAllRoles = async () => {
    const result = await pool.query(`
        SELECT 
            r.id,
            r.title,
            d.name as Department,
            r.salary
        FROM Role r
        LEFT JOIN Department d on r.department_id = d.id
    `);
    return result[0];
  
}

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

const updateEmployeeManager = async (employee) => {
  const { id, manager_id } = employee;
  
  await pool.query(
    `UPDATE employee SET manager_id = ${manager_id} WHERE id = ${id}`
  );
}

const deleteDepartment = async (id) => {
    // unset all roles that has reference to that department
    await pool.query(
      `UPDATE Role SET department_id = null WHERE department_id = ${id}`
    );
  await pool.query(
    `DELETE FROM department WHERE id = ${id}`
  );
}

const deleteEmployee = async (id) => {
    await pool.query(
        `UPDATE Employee SET manager_id = null WHERE manager_id = ${id}`
    );

    await pool.query(
        `DELETE FROM employee WHERE id = ${id}`
    );
}

const deleteRole = async (id) => {
  // unset all employees that has reference to that role
  await pool.query(
    `UPDATE Employee SET role_id = null WHERE role_id = ${id}`
  );
  await pool.query(
    `DELETE FROM role WHERE id = ${id}`
  );
}

module.exports = {
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
}