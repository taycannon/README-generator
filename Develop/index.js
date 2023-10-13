// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
inquirer
    .prompt({
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
        },
        {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'Description',
        },
        
        
        {
        type: 'input',
        message: 'Does users need to install anything?',
        name: 'Installation',
        },
        
        
        {
        type: 'input',
        message: 'What is the use for this project?',
        name: 'Usage',
        },
        
        
        {
        type: 'input',
        message: 'Did you use outside help or work with others? If so put them here.',
        name: 'Credits',
        },
        
        
        {
        type: 'list',
        message: 'Did you have a license for this project? If so pick one!',
        name: 'License',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Boost Software License 1.0', 
        'Microsoft Public License', 'MIT','GNU Affero General Public License v3.0', 'GNU General Public License family', 'N/A']

    })

 ];
    
 const createREADME = (answers) => `
 
 # ${answers.Title}

 `





// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
