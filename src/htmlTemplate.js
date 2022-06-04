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
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css"><source src="../htmlTemplate.js" type="htmlTemplate">
        </head>
        <body>
        <header class="container">
            <div class="flex box justify-center">
            <h1>My Team</h1>
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
        <div class='box card'>
            <div class='box'>
                <h2>Name: ${engineerCard.getName()}</h2>
                <h2>Role: ${engineerCard.getRole()}</h2>
            </div>
            <div class='box'>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineerCard.getId()}</li>
                    <li class="list-group-item">Email: ${engineerCard.getEmail()}</li>
                    <li class="list-group-item">Github: ${engineerCard.getGithub()}</li>
                </ul>
            </div>
        </div>
    `           
};

const intern = internCard =>{
    return `
        <div class='card'>
            <div class='box card'>
                <h2>Name: ${internCard.getName()}</h2>
                <h2>Role: ${internCard.getRole()}</h2>
            </div>
            <div class='box'>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${internCard.getId()}</li>
                    <li class="list-group-item">Email: ${internCard.getEmail()}</li>
                    <li class="list-group-item">School: ${internCard.getSchool()}</li>
                </ul>
            </div>
        </div>
    `           
};

const manager = managerCard =>{
    return `
        <div class='card'>
            <div class='box card'>
                <h2>Name: ${managerCard.getName()}</h2>
                <h2>Role: ${managerCard.getRole()}</h2>
            </div>
            <div class='box'>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${managerCard.getId()}</li>
                    <li class="list-group-item">Email: ${managerCard.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${managerCard.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    `           
};
module.exports=layout;