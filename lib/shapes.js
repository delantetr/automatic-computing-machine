const inquirer = require('inquirer');
const fs = require('fs')


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter text. (Up to three characters)',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Enter a color for text.(color keyword or hexadecimal)',
      name: 'text color',
    },
    {
      type: 'list',
      message: 'Enter a shape',
      name: 'shape',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
