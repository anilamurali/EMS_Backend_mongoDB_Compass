// import db
const db = require('./db')

// get all employee details
const getAllEmployees = () => {
    return db.Employee.find().then((response) => {
        if (response) {
            return {
                statusCode: 200,
                employe: response//array of employees
            }


        }
        else {
            return {
                statusCode: 404,
                message: 'No such employee found'
            }
        }
    })
}
const addEmployees = (id, name, age, designation, salary) => {
    return db.Employee.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 401,
                message: "Employee Already exist"
            }
        }
        else {
            const newEmployee = db.Employee({ id, name, age, designation, salary })
            newEmployee.save()
            return {
                statusCode: 200,
                message: "Employee Added succesfully",

            }

        }
    })

}
// delete a puticular employee
const deleteEmployee = (_id) => {
    return db.Employee.deleteOne({_id }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                message: "Employee deleted successfully"
            }
        }
        else {
            return {
                statusCode: 404,
                message: "Employee not found"

            }
        }
    })
}

// View an Employee
const viewEmployee = (id) => {
    return db.Employee.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 200,
                anEmployee: result
            }

        }
        else {
            return {
                statusCode: 404,
                message: "Employee not found"
            }
        }
    })
}

// Edit particular employee

const updateEmployee = (id, name, age, designation, salary) => {
    return db.Employee.findOne({id}).then((result)=>{
        if (result) {
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save();//Update  changes
        return{
            statusCode:200,
            message:"Employee updated successfully"
        }
            
        }
        else{
            return{
                statusCode:404,
                message:"Employee Not Found"
            }

        }
    })
   

}
module.exports = {
    getAllEmployees,
    addEmployees,
    deleteEmployee,
    viewEmployee,
    updateEmployee
}
