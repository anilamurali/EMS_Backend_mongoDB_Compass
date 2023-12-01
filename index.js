//1. import express
const express = require('express');
//2. import cors
const cors =require('cors')

const logic =require('./services/Logics')

//3. create a server application using the express
const serverApp =express()

// 4. use cors and express
serverApp.use(cors({ //cors used to connect two different ports
    origin:'http://localhost:3000'

}))
serverApp.use(express.json())//used to convert the data to json format

// 5. server listening
serverApp.listen(8000,()=>{
    console.log(('server listening on port 8000'));
})

// get all employees

serverApp.get('/getEmployees',(req,res)=>{
    logic.getAllEmployees().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
// add an employee api call
serverApp.post('/addEmployees',(req,res)=>{
    logic.addEmployees(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// delete an employee api call
serverApp.delete('/deleteEmployees/:id',(req,res)=>{
    logic.deleteEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

// View a particular employee

serverApp.get('/viewEmployees/:id',(req,res)=>{
    logic.viewEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})
// Edit a particular employee

serverApp.post('/updateEmployees/:id',(req,res)=>{
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)

    })
})