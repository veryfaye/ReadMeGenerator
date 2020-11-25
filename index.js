const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

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
    choices: ["MIT", "Other"],
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
];

// readme file data
const readmeData = (answers) => {
  `# ${answers.title}
${answers.description}

## Installation Instructions
${answers.installationInstructions}

## Usage Information
${answers.usageInformation}

## Contribution Guidelines
${answers.contributionGuidelines}

## Test Instructions
${answers.testInstructions}

## License
${answers.license}

## Help
Github [link](https.github.com/${answers.github}), and [email](mailto:${answers.email}) link go here`;
};

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
//init();

//----------------------ADDED BY AL TO TEST THE FUNCTIONALITY. CHANGE BACK TO THE FUNCTIONS ABOVE FOR FINAL VERSION----------------------
inquirer.prompt(questions).then((response) => {
//   let fileData = readmeData(response);
//   console.log(fileData)
  fs.writeFileAsync("exampleREADME.md", readmeData(response), (err) =>
    err ? console.error(err) : console.log("Saved")
  );
});
