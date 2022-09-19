import inquirer from "inquirer"
import fs from "fs"

const getReadme = ({ titleName, description, installation, contribution, test, usage, license, firstName, github, email}) => {
  
return `

> ## ${titleName} 

> ## Table of content:
- [Description](#description) 
- [Installation](#installation) 
- [Contribution](#contribution) 
- [Test instruction](#test-instruction)
- [Usage](#usage) 
- [License](#license) 
- [Question](#question)

### Description
${description}
***
### Installation
${installation}
***
### Contribution
${contribution}
***
### Test instruction
${test}
***
### Usage
${usage}
***
### License
${license}
***
### Video link https://drive.google.com/file/d/1Zg10QP7bej7nkot30oG09RFsNRaoSgXt/view
***
### Question 
> My name is
${firstName}.

> You can contact me by sending email, or by GitHub:
__[GitHub](${github})__
__[Email](mailto:${email})__
`

 }

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "titleName",
    },
    {
      type: "input",
      message: "Could you describe your project?",
      name: "description",
    },
    {
      type: "input",
      message: "What we need to install?",
      name: "installation",
    },
    {
      type: "input",
      message: "Contribution?",
      name: "contribution"
    },
    {
      type: "input",
      message: "Test instruction?",
      name: "test",
    },
    {
      type: "input",
      message: "Usage info?",
      name: "usage"
    },
    {
      type: "input",
      message: "license?",
      name: "license",
    },
    {
      type: "input",
      message: "What is your name?",
      name: "firstName",
    },
    {
      type: "input",
      message: "What is your GitHub link?",
      name: "github",
    },
    {
      type: "input",
      message: "What is your Email?",
      name: "email"
    }
])
  .then((response) => {
    fs.writeFile("./README.md", getReadme(response), (error) => {
    console.log("Success, please check your Readme file!")
  })
  })
  .catch((error) => {
  console.log(error)
})
















// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
// const questions = [];
// TODO: Create a function to write README file
// TODO: Create a function to initialize app
//// function init() 




