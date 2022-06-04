const Employee = require('./employee');

class Intern extends Employee {
    constructor(id, name, email, school){
        super(id,name,email);
        this.school = school;
    }

    getRole(){
        return 'Intern';
    }
    getSchool(){
        return this.school;
    }
}

const internQuestions = [
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID?"
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school did intern go to?"
    },
]

module.exports={Intern, internQuestions};