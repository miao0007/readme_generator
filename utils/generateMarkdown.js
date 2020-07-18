// This function is aim to generate README markdown

function generateMarkdown(data) {
    return `
    
  ![GitHub](https://img.shields.io/badge/license-${data.license}-blue)
    
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [License](#license)
  * [Installation](#installation)
  * [Tests](#tests)
  * [Usage](#usage)
  * [Contributing](#contribution)
  * [Questions](#questions)
  ## Installation
  \`\`\` ${data.installation} \`\`\`
  ## Tests
  \`\`\` ${data.tests} \`\`\`
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributing
  ${data.contributing}
  ## Questions
  GitHub: https://github.com/${data.username}
  
  Email:  ${data.email}
  `
  };
  
  module.exports = generateMarkdown;