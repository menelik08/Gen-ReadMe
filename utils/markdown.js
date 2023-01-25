// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License](https://img.shields.io/badge/License-MIT-green.svg)]";
  } else if (license === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-green.svg)]";
  } else if (license === "GNU General Public License v3.0") {
    return "[![License](https://img.shields.io/badge/License-GNU_GPL_3.0-green.svg)]";
  } else if (license === "ISC License") {
    return "[![License](https://img.shields.io/badge/License-ISC-green.svg)]";
  } else {
    return ""
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badge = renderLicenseBadge(license);
  if (license === "MIT License") {
    return badge.concat("(https://opensource.org/licenses/MIT)");
  } else if (license === "Apache License 2.0") {
    return badge.concat("(https://opensource.org/licenses/Apache-2.0)");
  } else if (license === "GNU General Public License v3.0") {
    return badge.concat("(https://www.gnu.org/licenses/gpl-3.0)");
  } else if (license === "ISC License") {
    return badge.concat("(https://opensource.org/licenses/ISC)");
  } else {
    return ""
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License" || license === "Apache License 2.0" || license === "GNU General Public License v3.0" || license === "ISC License") {
    return `## **License**
This application is covered under the ${license}`;
  } else {
    return "";
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**

${renderLicenseLink(data.license)}

## **Description**
${data.description}
## **Table Of Contents**

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## **Installation**
${data.installation}

## **Usage**
${data.usage}

## **Contributing**
${data.contribution}

## **Tests**
${data.test}

## **Questions**
My GitHub profile: https://github.com/${data.username}

If you have any additional questions or concerns and wish to reach out to me, please email me at ${data.email} with the name of this GitHub repo, and your question.

${renderLicenseSection(data.license)}`;
};

module.exports = generateMarkdown;
