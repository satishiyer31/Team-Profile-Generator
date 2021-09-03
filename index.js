// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');
const Manager = require('./classes/Manager');
const Engineer = require('./classes/Engineer');
const Intern = require('./classes/Intern');
const fs = require('fs');
var teamMembers =[];


var addMoreTeam = true; //var to support do while loop, allows adding of unknown number of team members.

async function getManagerInfo() {


  questions_manager = [
    {
      type: "input",
      message: "Please enter team manager's name",
      name: "manager_name",
    },

    {
      type: "input",
      message: "Please enter manager's employee ID",
      name: "manager_emp_id",
    },

    {
      type: "input",
      message: "Please enter manager's email",
      name: "manager_email",
    },
    {
      type: "input",
      message: "Please enter manager's office number",
      name: "manager_number",
    },
  ];

   await inquirer.prompt(questions_manager).then((response) => {
    console.log(response);

    const manager =  new Manager(
      response.manager_name,
      response.manager_emp_id,
      response.manager_email,
      response.manager_number
    );
    // manager.printinfo();
    manager.getName();
    manager.getID();
    manager.getEmail();
    manager.getRole();
    teamMembers.push(manager);
  });
}



async function askEmployeeDetails() {

do{

    await inquirer.prompt(
        {
            type: 'list',
            message: 'Would you like to add other team members?',
            name: 'add_more',
            choices: ['Engineer', 'Intern', 'Finished building my team'],

        }

    )
    .then( async(response) => {
        switch(response.add_more) {

            case 'Engineer': await getEngineerInfo(); break;

            case 'Intern':   await getInternInfo(); break;

            case 'Finished building my team': console.log("Done"); addMoreTeam= false; // reset var to exit the do while loop
        }
    });

}
while (addMoreTeam==true)
}


async function init() {
    await getManagerInfo();
    await askEmployeeDetails();
    await generateHtml();

}


async function getEngineerInfo() {

    questions_engineer = [
        {
          type: "input",
          message: "Please enter Engineer's name",
          name: "engineer_name",
        },
    
        {
          type: "input",
          message: "Please enter Engineer's employee ID",
          name: "engineer_emp_id",
        },
    
        {
          type: "input",
          message: "Please enter engineer's email",
          name: "engineer_email",
        },
        {
          type: "input",
          message: "Please enter engineer's GitHub",
          name: "github",
        },
      ];

      await inquirer.prompt(questions_engineer).then((response) => {
        // console.log(response);
    
        const engineer =  new Engineer(
          response.engineer_name,
          response.engineer_emp_id,
          response.engineer_email,
          response.github
        );
        
        engineer.getName();
        engineer.getID();
        engineer.getEmail();
        engineer.getRole();
        teamMembers.push(engineer);
      });
}

async function getInternInfo() {

    questions_intern= [
        {
          type: "input",
          message: "Please enter Intern's name",
          name: "intern_name",
        },
    
        {
          type: "input",
          message: "Please Intern's employee ID",
          name: "Intern_emp_id",
        },
    
        {
          type: "input",
          message: "Please enter Intern's email",
          name: "intern_email",
        },
        {
          type: "input",
          message: "Please enter intern's School",
          name: "school",
        },
      ];

     await inquirer.prompt(questions_intern).then((response) => {
        // console.log(response);
    
        const intern =  new Intern(
          response.intern_name,
          response.Intern_emp_id,
          response.intern_email,
          response.school
        );
        
        intern.getName();
        intern.getID();
        intern.getEmail();
        intern.getRole();
        teamMembers.push(intern);
      });
}

async function generateHtml() {
    // fs.writeFile('output.html', html);
    // console.log(teamMembers);
    
    var teamData ="";

    // for (let index = 0; index < teamMembers.length; index++) {
    //      teamData = teamData + `<p> ${JSON.stringify(teamMembers[index])} </p>\n`;
        
    // }

    for (let index = 0; index < teamMembers.length; index++) {

      if(teamMembers[index].office_number){
        //Manager
           teamData = teamData + `<div class="card"> <div class="card-body"> <h5 class="card-title">${teamMembers[index].emp_name} - Manager </h5>\n`;
           teamData = teamData + `<table> <tr> <td> ID: ${teamMembers[index].ID} </td> </tr> <tr> <td> Email: <a href="mailto:${teamMembers[index].email}"> ${teamMembers[index].email}</a>  </td> </tr> <tr> <td> Office Number: ${teamMembers[index].office_number} </td> </tr>  </table></div></div>`
          }   
      else if(teamMembers[index].github_username){
        //Engineer
        teamData = teamData + `<div class="card"> <div class="card-body"> <h5 class="card-title">${teamMembers[index].emp_name} - Engineer </h5>\n`;
        teamData = teamData + `<table> <tr> <td> ID: ${teamMembers[index].ID} </td> </tr> <tr> <td> Email:<a href="mailto:${teamMembers[index].email}"> ${teamMembers[index].email}</a> </td> </tr> <tr> <td> GitHub:<a href="https://github.com/${teamMembers[index].github_username}"> ${teamMembers[index].github_username}</a></td> </tr>  </table></div></div>`
      }
      else {
        //Intern
        teamData = teamData + `<div class="card"> <div class="card-body"> <h5 class="card-title">${teamMembers[index].emp_name} - Intern </h5>\n`;
        teamData = teamData + `<table> <tr> <td> ID: ${teamMembers[index].ID} </td> </tr> <tr> <td> Email:<a href="mailto:${teamMembers[index].email}"> ${teamMembers[index].email}</a> </td> </tr> <tr> <td> School: ${teamMembers[index].school} </td> </tr>  </table></div></div>`
      }
      }

    console.log(teamData);

    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    <body>
    <h1>My Team </h1>
    <div class="row my-3">
        ${teamData}
    </div>
    </body>
    </html>`

    fs.writeFile('output.html', html, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}

init();



