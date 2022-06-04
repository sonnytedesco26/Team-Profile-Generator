const inquirer = require('inquirer');
const {Engineer, engineerQuestions} = require('./lib/engineer');
const {Intern, internQuestions} = require('./lib/intern');
const {Manager, managerQuestions} = require('./lib/manager');

const makeHtml = require('./htmlCreation/makeHtml');
const htmlTemplate = require('./htmlCreation/htmlTemplate');

teamArray=[];

const main = () => employeePrompt;
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
                {name:'Finished', value:'finished'},
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
        if(answer.employeeRole == 'finished'){
            let result = htmlTemplate(teamArray)
            makeHtml(result);
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
main();