const employees = teamArray =>{
    let html = '';
    for(i=0;i<teamArray.length;i++){
        if(teamArray[i].getRole() == 'Engineer'){
            html = html+engineer(teamArray[i])
        }
        if(teamArray[i].getRole() == 'Intern'){
            html = html+intern(teamArray[i])
        }
        if(teamArray[i].getRole() == 'Manager'){
            html = html+manager(teamArray[i])
        }
    }
    return html;
}


const layout = x =>{
    return `
    <!DOCTYPE html>
    <html>
        <head>
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="./style.css"><source src="../htmlTemplate.js" type="htmlTemplate">
        </head>
        <body>
        <header class = "container">
            <div class = "flex box justify-center">
            <h1>Team</h1>
            </div>
        </header>
        <main class = "container">
        ${employees(x)}
        </main>
        </body>
    </html>
    `
}


const engineer = engineerCard =>{
    return `
        <div class='card'>
            <div class='box'>
                <h1>Name: ${engineerCard.getName()}</h1>
                <h3>Role: ${engineerCard.getRole()}</h3>
            </div>
            <div class='box'>
                <ul>
                    <li>ID: ${engineerCard.getId()}</li>
                    <li>Email: ${engineerCard.getEmail()}</li>
                    <li>Github: ${engineerCard.getGithub()}</li>
                </ul>
            </div>
        </div>
    `           
};

const intern = internCard =>{
    return `
        <div class='card'>
            <div class='box'>
                <h1>Name: ${internCard.getName()}</h1>
                <h3>Role: ${internCard.getRole()}</h3>
            </div>
            <div class='box'>
                <ul>
                    <li>ID: ${internCard.getId()}</li>
                    <li>Email: ${internCard.getEmail()}</li>
                    <li>School: ${internCard.getSchool()}</li>
                </ul>
            </div>
        </div>
    `           
};

const manager = managerCard =>{
    return `
        <div class='card'>
            <div class='box'>
                <h1>Name: ${managerCard.getName()}</h1>
                <h3>Role: ${managerCard.getRole()}</h3>
            </div>
            <div class='box'>
                <ul>
                    <li>ID: ${managerCard.getId()}</li>
                    <li>Email: ${managerCard.getEmail()}</li>
                    <li>Office Number: ${managerCard.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `           
};
module.exports=layout;