const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, name, email, github){
        super(name,id,email);
        this.github = github;
    }

    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}

const engineerQuestions = [
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID?"
    },
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github?"
    },
]


module.exports = {Engineer, engineerQuestions};