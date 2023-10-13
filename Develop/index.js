// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'Title',
    },


    {
        type: 'input',
        message: 'Write a brief description of your project?',
        name: 'Description',
    },


    {
        //Table of contents
        type: 'input',
        message: 'If your README is long, input a Table of Contents (optional)',
        name: 'Table',
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
        //The list of Licenses
        type: 'checkbox',
        message: 'Did you have a license for this project? If so pick one!',
        name: 'License',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Boost Software License 1.0',
            'Microsoft Public License', 'MIT', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'N/A']

    },


    {
        type: 'input',
        message: 'Do you have a GitHub? If so put it here if not write N/A',
        name: 'GitHub',
    },

    {
        type: 'input',
        message: 'Do you have a Email? If so put it here if not write N/A',
        name: 'Email',
    },
];

//Function to initialize the README
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            if (!answers.Title || !answers.Description) {
                console.error('Title and Description are required!');
                return;
            }

            const tableOfContents = answers.Table ? `## Table of Contents\n${answers.Table
                .split(',')
                .map(section => `- [${section.trim()}](#${section.trim().toLowerCase().replace(/\s+/g, '-')})\n`)
                .join('')}` : '';

            const document = `
# ${answers.Title}

## Description
${answers.Description}

## Table of Contents
${answers.Table}
[Description](#description)

[Credits](#Credits)

[Contact-Information](#Contact-Information)

## Installation
${answers.Installation}

## Usage
${answers.Usage}

## Credits
${answers.Credits}

## License
${answers.License}

## Contact Information

GitHub: ${answers.GitHub}

Email: ${answers.Email}



`;

            writeToFile(document);
        })
        .catch((error) => {
            console.error('Error occurred:', error);
        });
}

// The function to write README file
function writeToFile(README) {
    fs.writeFile('README.md', README, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('Successful');
        }
    });
}

// Function call to initialize app
init();
