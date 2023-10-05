//Setting required files and pathways
const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./images/logo.svg";
const setShape = require('./lib/setShapes.js')

function logoCreate(response) { //Function to create the new logo from the user responses provided
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() { //Initializes and asks the user questions, then created the log using responses. 
    inquirer 
    .prompt(questions)
    .then((response) => {
        logoCreate(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init(); //initializes