const { default: mongoose } = require('mongoose');
const mongoos = require('mongoose');

const validator = require('validator');
 
const studentschema = new mongoos.Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "emil id is already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                    throw new Error("invalid email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
      
        required: true,
        unique: true
    

    },
    address: {
        type:String,
        require:true
    }
})

const student = new mongoose.model('student', studentschema);
module.exports = student;
