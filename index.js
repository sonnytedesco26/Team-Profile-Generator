const inquirer = require('inquirer');

const {Engineer, engineerQuestions} = require('./lib/engineer');
const {Intern, internQuestions} = require('./lib/intern');
const {Manager, managerQuestions} = require('./lib/manager');

teamArray=[];

const employeePrompt=()=>{
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What type of employee do you want to add?',
            choices:[
                {name:'Engineer', value:'engineerAdd'},
                {name:'Intern', value:'internAdd'},
                {name:'Manager', value:'managerAdd'},
                {name:'None', value:'none'},
            ]
        }
    ]).then(response =>{
        if(response.employeeRole == 'engineerAdd'){
            engineerPrompt();
        };
        if(response.employeeRole == 'internAdd'){
            internPrompt();
        };
        if(response.employeeRole == 'managerAdd'){
            managerPrompt();
        };
        if(answer.employeeRole == 'none'){

        }
    })
};


const engineerPrompt=()=>{
    inquirer.prompt(engineerQuestions)
    .then((response) => {
        response = new Engineer(response.id,response.name,response.email,response.github)
        teamArray.push(response);

        return employeePrompt();
    })
};

const internPrompt=()=>{
    inquirer.prompt(internQuestions)
    .then((response) => {
        response = new Intern(response.id,response.name,response.email,response.school)
        teamArray.push(response);

        return employeePrompt();
    })
};

const managerPrompt=()=>{
    inquirer.prompt(managerQuestions)
    .then((response) => {
        response = new Manager(response.id,response.name,response.email,response.officeNumber)
        teamArray.push(response);

        return employeePrompt();
    })
};