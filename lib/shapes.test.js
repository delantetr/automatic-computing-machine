const { Triangle } = require('./shapes');

describe('Triangle class', () => {
  test('render method should return SVG string with specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});
describe('Circle class', () => {
  test('render method should return SVG string with specified color', () => {
    const circle = new Circle();
    circle.setColor('red');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="70" fill="red" />');
  });
});
describe('Square class', () => {
  test('render method should return SVG string with specified color', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
  });
});


