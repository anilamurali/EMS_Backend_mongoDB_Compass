// node+ mongodb connection
// 1. import mongoose
const mongoose =require('mongoose')


// 2. connect the mongodb
mongoose.connect('mongodb://localhost:27017/EMS')

// 3.  create a model and schema for collection

const Employee= mongoose.model('Employee',
    {id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number

}
)
module.exports={
    Employee
}
