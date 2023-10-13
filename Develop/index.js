// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
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
    type: 'input',
    message: 'Did you have a license for this project?',
    name: 'License',
    },
 ];
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
