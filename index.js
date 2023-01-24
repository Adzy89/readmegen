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

const writeToFile = async (fileName, data) => {
    try {
        await fs.promises.writeFile(fileName, data);
        console.log(`Successfully written to ${fileName}`);
    } catch (error) {
        console.error(`Error writing to ${fileName}`, error);
    }
};

const init = async () => {
  try {
      const data = await inquirer.prompt(questions);
      await writeToFile("README.md", generatorMarkdown(data));
      console.log("Successfully created README.md file");
  } catch (error) {
      console.error("Error: ", error);
  }
};

init();
