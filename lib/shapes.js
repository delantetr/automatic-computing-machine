const inquirer = require('inquirer');
const fs = require('fs')

class Logo {
    constructor(text, textColor, shape, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
    generateSVG() {
        const width = 300;
        const height = 200;

        const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
            <!-- Add the shape based on user input -->
            ${this.generateShapeSVG()}
            <!-- Add the text based on user input -->
            ${this.generateTextSVG()}
        </svg>
        `;

    return svgString;
    }
}

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
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Enter a shape',
      name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter a color for shape.(color keyword or hexadecimal)',
        name: 'shapeColor',
      },
  ])
  .then((response) => {
    console.log(response);
    console.log(response.username);

    let languageArray = response.languages.split(' ');
    console.log(languageArray);

    fs.writeFile('logo.svg', JSON.stringify(response), (err) => {
    err ? console.error('Error writing file: ', err) : console.log('Responses saved to responses.txt!')
    });
});
