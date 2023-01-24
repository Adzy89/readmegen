const inquirer = require('inquirer')

const fs = require('fs');

const generatorMarkdown = require('./utils/generateMarkdown');

const questions = [
    
    {
      type: 'input',
      name: 'Title',
      message: 'What is the Project Title?',
      
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Describe your project',
      
    },
    {
      type: 'input',
      name: 'Table of Contents',
      message: 'Table of Contents',
     
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'How to install your project',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How do we use your project',
      
    },
    {
      type: 'List',
      name: 'License',
      message: 'Enter your License type',
      choices: ['MIT License','GPL License', 'Apcahe License', 'GNU License','N/A'],
      
    },
    {
      type: 'input',
      name: 'Contribution',
      message: 'Any contributors?',
     
    },
    {
      type: 'input',
      name: 'Test',
      message: 'Was there any testing done?',
      
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'Do you have any questions?', 
    },
  ]

  function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
  }

  function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })

}

init();
