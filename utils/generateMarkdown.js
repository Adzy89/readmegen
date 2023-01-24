// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
      switch (license) {
          case 'MIT':
              return badges.mit;
          case 'Apache 2.0':
              return badges.apache;
          case 'GPL 3.0':
              return badges.gpl;
          case 'GNU':
              return badges.gnu;
          default:
              return 'Invalid license';
      }
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license)  {
    switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'Apache 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
        case 'GPL 3.0':
            return 'https://www.gnu.org/licenses/gpl-3.0';
        default:
            return '';
    }
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {{
    switch (license) {
        case 'MIT':
            return `## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details`;
        case 'Apache 2.0':
            return `## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details`;
        case 'GPL 3.0':
            return `## License

This project is licensed under the GPL 3.0 License - see the [LICENSE.md](LICENSE.md) file for details`;
        default:
            return '';
    }
}

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ## Description
  ${data.Description}
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  ${data.Installation} 

  ## Usage
  ${data.Usage}

  ## License
  ${data.License} 

  ## Contribution
  ${data.Contribution}

  ## Test
  ${data.Test}

  ## Questions
  ${data.Questions}
  
  If you have any questions please email me here => adam_pilato@hotmail.com

  gihub: Adzy89

  `
  };

module.exports = generateMarkdown;

// renderLicenseSection(license);
// renderLicenseLink(license);
// renderLicenseBadge(license);

// not sure how to pass the license functions :)