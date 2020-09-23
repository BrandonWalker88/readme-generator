const inquirer = require("inquirer");

// array of questions for user
const questions = [
  "What is the title of your project?",
  "Please provide a description of your project.",
  "Table of contents",
  "How do you install your project?",
  "How do you intend for your project to be used?",
  "What licencing was used in your project",
  "Who all has contributed to your project?",
  "How did you test your project?",
  "Please provide Instructions on how to use your project.",
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, function (err) {
    if (err) throw Error;
  });
}

// function to initialize program
function init() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "questions[0]",
      default: "Default Title",
    },
    {
      type: "input",
      name: "description",
      message: "questions[1]",
      default: "Default Description",
    },
    {
      type: "input",
      name: "Install",
      message: "questions[3]",
      default: "Default Install",
    },
    {
      type: "input",
      name: "usage",
      message: "questions[4]",
      default: "Default usage",
    },
    {
      type: "input",
      name: "licencing",
      message: "questions[5]",
      default: "Default Licencing",
    },
    {
      type: "input",
      name: "contributors",
      message: "questions[6]",
      default: "Default Contributors",
    },
    {
      type: "input",
      name: "test",
      message: "questions[7]",
      default: "Default Test",
    },
    {
      type: "input",
      name: "instructions",
      message: "questions[0]",
      default: "Default Instructions",
    },
  ]);
}

// function call to initialize program
init();
