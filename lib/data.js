// Hardcoded query: SELECT FROM course_names WHERE id = 3;
const viewAllEmployee = () => {
    db.query(`DELETE FROM employee_table WHERE id = ?`, 3, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      })
    };

const viewAllEmployees = () => {
    return db.query(`SELECT * FROM EMPLOYEE`, (err, results) => {
      if (err) console.log(err);
      return results;
    });
}
// function to get the roleid by title
const getRoleId = (title) => {
    db.query(`SELECT * FROM ROLE where title = ‘${title}’`, (err, results) => {
        if (err) console.log(err);
        return results;
    });
}

const addEmployeeFirstname = (first_name, last_name, manager, role) => {
    db.query(`INSERT INTO employee (first_name, last_name, manager, role)
    VALUES` )
}   


module.exports = {
    viewAllEmployee
}    