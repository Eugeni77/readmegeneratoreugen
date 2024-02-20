// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## License
${data.license}

## Contributing
${data.contributing}

## Usage
${data.usage}

## Installation
${data.installation}
`;
}

module.exports = generateMarkdown;
