// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();






const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "userName",
      message: "GitHub user name: "
    },
    {
      type: "input",
      name: "email",
      message: "Email address: "
    },
    {
      type: "input",
      name: "title",
      message: "Title of your application: "
    },
    {
      type: "input",
      name: "description",
      message: "Brief description of your application:"
    },
    {
      type: "input",
      name: "installation",
      message: "Installation instructions: "
    },
    {
      type: "input",
      name: "usage",
      message: "Usage instructions: "
    },
    {
      type: "list",
      name: "license",
      message: "Choose a License: ",
      choices: ["Apache 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense", "None" ]
    },
    {
      type: "input",
      name: "contributing",
      message: "Contributing Instructions: "
    },
  ]);

}


function generateMarkdown(answers) {


  return `# ${answers.title}


  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)
  
  * [License](#license)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)

  ## Installation
  To install: 
  ${answers.installation}


  ## Usage 

  ${answers.usage}

  ## License

  ${answers.license}


  ## Contributing 

  ${answers.contributing}

  ## Questions

  If you have any questions, run into any issues, or just want to chat with me, ${answers.name}, you can reach me at ${answers.email}.  Check out more of my work here: [${answers.userName}](https://github.com/${answers.userName}/).

  `;
}

promptUser()
  .then(function (responses) {
    return writeFileAsync("Readme.md", generateMarkdown({ ...responses }));
  })
  .then(function () {
    console.log("Successfully wrote to Readme.md");
  })
  .catch(function (err) {
    console.log(err);
  });
