const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicense', 'No License']
  switch (license) {
    case 'GNU AGPLv3':
      return ('[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)');
    case 'Mozilla Public License 2.0':
      return ('[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)');
    case 'Apache License 2.0':
      return ('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
    case 'MIT License':
      return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
    case 'The Unlicense':
      return ('[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)');
    case 'No License':
      return ('&copy;');
    default:
      return ('');
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      fs.copyFile('./utils/LICENSE/GNUAGPLv3.txt', './finishedReadMe/LICENSE.txt', err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('added license.txt')
      });
      return ('[License](./LICENSE.txt)');
    case 'Mozilla Public License 2.0':
      fs.copyFile('./utils/LICENSE/MozillaPL2.0.txt', './finishedReadMe/LICENSE.txt', err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('added license.txt')
      });
      return ('[License](./LICENSE.txt)');
    case 'Apache License 2.0':
      fs.copyFile('./utils/LICENSE/ApacheL2.0.txt', './finishedReadMe/LICENSE.txt', err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('added license.txt')
      });
      return ('[License](./LICENSE.txt)');
    case 'MIT License':
      fs.copyFile('./utils/LICENSE/MITL.txt', './finishedReadMe/LICENSE.txt', err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('added license.txt')
      });
      return ('[License](./LICENSE.txt)');
    case 'The Unlicense':
      fs.copyFile('./utils/LICENSE/Theunlicense.txt', './finishedReadMe/LICENSE.txt', err => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('added license.txt')
      });
      return ('[License](./LICENSE.txt)');
    case 'No License':
      return ('');
    default:
      return ('');
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return ('This work falls under the GNU AGPLv3 license');
    case 'Mozilla Public License 2.0':
      return ('This work falls under the Mozilla Public License 2.0');
    case 'Apache License 2.0':
      return ('This work falls under the Apache License 2.0');
    case 'MIT License':
      return ('This work falls under the MIT License');
    case 'The Unlicense':
      return ('This work falls under the The Unlicense');
    case 'No License':
      return ('This work falls under copyright and please contact the owner for permission to use.');
    default:
      return ('');
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return [data.title,
  `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 
  ${data.description}
  
  
  
  ## Table of Contents 
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Questions?](#Questions?)
  
  
  ## Installation
  ${data.install}
  
  
  
  ## Usage 
  ${data.usage}
 
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.test}
    
  ## License
  ${renderLicenseSection(data.license)}  
  ${renderLicenseLink(data.license)}
    
  ## Questions?
  ${data.contact}  
  [GitHub](https://github.com/${data.gitHub})  
  ${data.email}  
  
`];
}

module.exports = generateMarkdown;
