// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from "./utils/generateMarkdown.js";
import path from 'path';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use for your project?',
        choices: ["MIT", "Apache", "ISC", "None"],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are your installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub repository url for your project?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(process.cwd(), fileName);
    console.log(`Writing to file: ${filePath}`);
    try {
        fs.writeFileSync(filePath, data);
        console.log(`Successfully wrote to ${filePath}`);
    } catch (error) {
        console.error(`Error writing to file: ${filePath}`, error);
    }
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const markdownContent = generateMarkdown(answers);
        writeToFile("README.md", markdownContent);
        console.log("README.md file generated successfully!");
    } catch (error) {
        console.error("Error generating README file:", error);
    }
}

// Function call to initialize app
init();
