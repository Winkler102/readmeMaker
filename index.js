// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects title? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your projects description? (Required)',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What is your projects installation instructions? (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How to use you project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How to contribute to the project? (Required)',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test the project? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your Projects Title!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use? (Check all that apply)',
        choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicense', 'No License'],
        default: 6
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is you GitHub user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is you email address?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'How to contact you?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./finishedReadMe/${fileName}.md`, data, err => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('Made README! Please open to edit and make it your own.')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => generateMarkdown(data))
        .then(MD => writeToFile(MD[0], MD[1]));
}

// Function call to initialize app
init();
