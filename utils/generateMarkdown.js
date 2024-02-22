// utils/generateMarkdown.js
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
1. [License](#license)
2. [Contributing](#contributing)
3. [Usage](#usage)
4. [Installation](#installation)
5. [Tests](#tests)
6. [Questions](#questions)

## License
${data.license}

## Contributing
${data.contributing}

## Usage
${data.usage}

## Installation
${data.installation}

## Tests
${data.tests || "No tests are currently available."}


## Video
[![Click to watch video](https://your-website.com/path/to/thumbnail.jpg)](https://drive.google.com/file/d/1kAflY0SkY0bW2QwYG1536Mamv-D-OcBL/view)

## Questions
For any questions or concerns regarding this project, please contact me at [${data.email}](mailto:${data.email}). You can also visit my [GitHub profile](https://github.com/${data.github}) for additional information.
`;
}

module.exports = generateMarkdown;
