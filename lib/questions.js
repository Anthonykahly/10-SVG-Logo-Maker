// require colorOptions array to check if input matches one of the accepted colors
const colorOptions = require('./colorOptions.js')

const questions = [
    { //Shape of the logo
        name: 'shape',
        message: 'What is the desired shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    { //User selection for how they will specify the color format of the shape
        name: 'shapeColorChoice',
        message: 'Choose a color format for your logo:',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    { //Color of the chosen shape
        type: "input",
        name: "shapeColor",
        message: "What color is your logo? Enter a color keyword:",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorOptions.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorOptions[i]) != -1) {
                return true;
            }}
            return console.log("\n You must enter a valid color keyword")
        }
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter the colors hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n You must enter a valid hexadecimal")
            }
            return true;
        }
    },
    {
        name: 'text',
        message: 'What text would you like? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) { //Validates user input to limit text to only 3 characters
                return console.log("\n Text is limited to 3 characters maximum! Try again");
            }
            return true;
        }
    },
    { //Selecting how the user will specify the color of the text within the logo
        name: 'textColorChoice',
        message: 'Select a color format for your text:',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    { //Text color for the logo
        type: "input",
        name: "textColor",
        message: "What color is your text? Enter a color keyword:",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorOptions.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorOptions[i]) != -1) {
                return true;
            }}
            return console.log("\n You must enter a valid color keyword")
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter the colors hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n You must enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = questions;