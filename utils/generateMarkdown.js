// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Questions
  Questions regarding this project:
  GitHub profile: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;
