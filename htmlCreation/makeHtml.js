const fs = require('fs');

const makeHtml = (x) =>{
    fs.writeFile('./dist/index.html', x, (error) =>{
        if(error){
            console.log(error);
        }
    })
}

module.exports=makeHtml;