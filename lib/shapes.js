class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('The render() method must be implemented in subclasses.');
    }
  }
  
  class Triangle extends Shape {
    render() {
        const points = "150,18 244,182 56,182";
        return `<polygon points="${points}" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      const centerX = 150;
      const centerY = 100;
      const radius = 70;
      return `<circle cx="${centerX}" cy="${centerY}" r="${radius}" fill="${this.color}" />`;
    }
  }
  
  
  class Square extends Shape {
    render() {
      const x = 50;
      const y = 50;
      const size = 100;
      return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.color}" />`;
    }
  }
  
  
  module.exports = { Shape, Triangle, Circle, Square };
  