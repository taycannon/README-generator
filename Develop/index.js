// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

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
        type: 'list',
        message: 'Did you have a license for this project? If so pick one!',
        name: 'License',
        choices: ['Academic Free License v3.0', 'Apache license 2.0', 'Boost Software License 1.0',
            'Microsoft Public License', 'MIT', 'GNU Affero General Public License v3.0', 'GNU General Public License family', 'N/A']

    }

];

function init() {
 inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
const document = `

# ${answers.Title}

${answers.Description}

${answers.Installation}

${answers.Usage}

${answers.Credits}

${answers.License}
`

writeToFile(document);
})
    .catch((error) => {
    console.error('Error occurred:', error);
    });
}


// TODO: Create a function to write README file
function writeToFile(README) {
    fs.writeFile('README.md', README, (err) => {
        if (err) {
            console.error('Error writing README file:', err);
        } else {
            console.log('Successful');
        }
    });
}
// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions)
//         .then((answers) => {
//             const readmeContent = createREADME(answers);
//             writeToFile(readmeContent);
//         })
//         .catch((error) => {
//             console.error('Error occurred:', error);
//         });
// }
// Function call to initialize app
init();
