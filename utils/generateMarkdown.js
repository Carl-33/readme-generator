// function to generate markdown for README
function generateMarkdown(data) {
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
  To install, run the following: 
  
  ${answers.installation}


  ## Usage 

  ${answers.usage}

  ## Contributing 

  ${answers.contributing}

  ## Questions

  If you have any questions, run into any issues, or just want to chat, you can reach me at ${answers.email}.  Check out more of my work here: [${answers.userName}](https://github.com/${answers.userName}/).

  `;
}

module.exports = generateMarkdown;
