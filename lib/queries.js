const pool = require('./db');
const getAllEmployees = async () => {
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
    `);
    return result[0];
  
}
const getAllDepartment = async () => {
    const result = await pool.query('SELECT * FROM Department');
    return result[0];
  
}
const getAllRoles = async () => {
    const result = await pool.query(`
        SELECT 
            r.title,
            d.name as Department,
            r.salary
        FROM Role r
        LEFT JOIN Department d on r.department_id = d.id
    `);
    return result[0];
  
}
module.exports = {
    getAllDepartment,
    getAllEmployees,
    getAllRoles
}