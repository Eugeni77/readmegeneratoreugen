const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "checkbox",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to this project",
  },
  {
    type: "input",
    name: "Usage",
    message: "How to use this project",
  },
  {
    type: "input",
    name: "Installation",
    message: "How to install this project",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  // This function is currently empty, you might want to implement it
}

// function to initialize program
function init() {
    function writeToFile(fileName, data) {
        const filePath = path.join(process.cwd(), fileName);
        fs.writeFileSync(filePath, data);
        console.log(`File created successfully at ${filePath}`);
      }
      
      
  // This function is currently empty, you might want to implement it
}

// function call to initialize program
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        // Generate README content using the provided answers
        const readmeContent = generateMarkdown(answers);
  
        // Specify the file name for the generated README
        const fileName = "README.md";
  
        // Write the content to the file
        writeToFile(fileName, readmeContent);
      })
      .catch((error) => {
        console.error("Error during initialization:", error);
      });
  }
  
init();
