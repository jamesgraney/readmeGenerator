// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (license === "Apache") {
    return "![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "ISC") {
    return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
  } else {
    return ""; // No badge for "None" or unrecognized license
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "ISC") {
    return "https://opensource.org/licenses/ISC";
  } else {
    return ""; // No link for "None" or unrecognized license
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return ""; // Return an empty string if no license is selected
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  For more details, see the license documentation: ${renderLicenseLink(data.license)}
  
  ## Contribution
  ${data.contribution}
  
  ## Testing
  \`\`\`
  ${data.testing}
  \`\`\`
  
  ## Questions
  If you have any questions, feel free to reach out:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;
  }

export default generateMarkdown;

