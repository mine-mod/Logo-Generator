import { Triangle, Circle, Square } from './shapes.js';

const generateSVG = (text, textColor, shape, shapeColor) => {
    switch (shape.toLowerCase()) {
        case 'triangle':
            return Triangle.generateSvg(text, shapeColor, textColor);
        case 'circle':
            return Circle.generateSvg(text, shapeColor, textColor);
        case 'square':
            return Square.generateSvg(text, shapeColor, textColor);
        default:
            console.error('Invalid shape');
            return '';
    }
};

export { generateSVG };