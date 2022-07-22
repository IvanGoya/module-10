const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./manager')
const intern = require('./intern');
const engineer = require('./engineer')
var fileText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <title>Team</title>
</head>
<body>
    <h1 class="d-flex justify-content-center bg-dark text-light p-5">My Team</h1>
    <section class="d-flex justify-content-around flex-wrap">`;

console.log('Provide all the information below about your manager:');
inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please provide your manager's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter your manager's employee ID:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Please your manager's email address:",
    },
    {
        type: 'input',
        name: 'office',
        message: "Please enter your manager's office:",
    },
])
.then((data) => {
    console.log(data);
    fileText = manager.managerInfo(data, fileText)
    addEmployee();
})
function addEmployee() {
    let options = ['Yes, add an intern', 'Yes, add an engineer', 'No, I am done adding people']
    let [intern, engineer, complete] = options
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberType',
            message: 'Do you need to add an employee?:',
            choices: options
        }
    ])
    .then((data) => {
        console.log(data);
        if (data.memberType === intern) {
            addIntern(data.memberType === engineer);
        } else if () {
            addEngineer();
        } else if (data.memberType === complete) {
            doneAdding();
        } else {
            console.log('ERROR!!');
        }
    })
}
function addIntern () {
    console.log('Please provide the following info about your intern:');

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please input your intern's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please input your employees employee ID number:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please input your interns email address:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please input what school your intern is currently studying at/graduated from:",
        }
    ])
    .then((data) => {
        fileText = intern.internInfo(data, fileText)
        addEmployee()
    })
}
function addEngineer() {
    console.log('Please provide the following information about your engineer:');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please input your engineers name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Please input your engineers employee ID number:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please provide your engineers email address:",
        },
        {
            type: 'input',
            name: 'gitHubUsername',
            message: "Please provide your engineers GitHub username:",
        },
    ])
    .then((data) => {
        fileText = engineer.engineerInfo(data, fileText)
        addEmployee()
    })
}
function doneAdding () {
    fileText += `</section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

</body>
</html>`

    createFile()
}
function createFile() {
    fs.writeFile("index.html", fileText, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Congrats! Your employees HTML file has been created sucessfully!');
        }
    })
}