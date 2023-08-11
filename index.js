const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function run() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the text:',
      validate: value => value.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (keyword or hexadecimal):',
    },
  ]);

  let shape;

  switch (userInput.shapeType) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
  }

  shape.setColor(userInput.shapeColor);

  const svgContent = shape.render(); 

  const svgFileName = 'logo.svg';
  fs.writeFileSync(svgFileName, svgContent);

  console.log(`Generated ${svgFileName}`);
}

run();
