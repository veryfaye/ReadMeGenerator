const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");


// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the readme file.",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of the readme file.",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "Enter the installation instructions of the readme file.",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "Enter the usage information of the readme file.",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Enter the contribution guidelines of the readme file.",
  },
  {
    type: "list",
    name: "license",
    message: "Select the license of the readme file.",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Enter your GitHub user name.",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Enter your email address.",
  },
  {
    type: "input",
    name: "fullName",
    message: "Enter your full name.",
  },
  {
    type: "input",
    name: "year",
    message: "Enter the current year.",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("Saved")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("exampleREADME.md", response);
  });
}

// function call to initialize program
init();
