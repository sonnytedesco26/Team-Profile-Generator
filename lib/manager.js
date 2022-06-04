const Employee = require('./employee');

class Manager extends Employee{
    constructor(id,name,email,officeNumber){
        super(id,name,email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return 'Manager';
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}

const managerQuestions = [
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID?"
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    },
]

module.exports = {Manager, managerQuestions};