SELECT  employee.id AS "id",
employee.first_name AS "First Name",
        employee.last_name AS "Last Name",
        role.title AS "Title",
        department.name AS "Department",
        role.salary AS "Salary",
        CONCAT(manager.first_name,' ' ,manager.last_name) AS "Manager"
FROM    employee
JOIN    role 
ON employee.role_id = role.id
JOIN    department
on role.department_id = department.id
LEFT JOIN   employee AS manager
ON employee.manager_id = manager.id;
