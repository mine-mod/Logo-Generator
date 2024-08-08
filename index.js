import { writeFile } from 'fs/promises';
import pkg from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';

const { prompt } = pkg;

const questions = [
    {
        type: 'input',
        name: 'logoLETTER',
        message: 'Give me up to 3 letters for your logo?',
    },
    {
        type: 'list',
        name: 'shapeLOGO',
        message: 'What shape do you want for your logo?',
        choices: ['Triangle', 'Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color for the shape (color keyword or hex code):',
        validate: input => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(input) || ['red', 'green', 'blue', 'yellow', 'black', 'white'].includes(input) ? true : 'Invalid color.'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the color for the text (color keyword or hex code):',
        validate: input => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(input) || ['red', 'green', 'blue', 'yellow', 'black', 'white'].includes(input) ? true : 'Invalid color.'
    }
];

function generateSvg(shape, letters, shapeColor, textColor) {
    switch (shape.toLowerCase()) {
        case 'triangle':
            return Triangle.generateSvg(letters, shapeColor, textColor);
        case 'circle':
            return Circle.generateSvg(letters, shapeColor, textColor);
        case 'square':
            return Square.generateSvg(letters, shapeColor, textColor);
        default:
            console.error('Invalid shape selected.');
            return '';
    }
}

async function writeSvgToFile(fileName, svgContent) {
    try {
        await writeFile(fileName, svgContent);
        console.log(`Logo file "${fileName}" created successfully!`);
    } catch (err) {
        console.error(`[ERROR] Error writing to file: ${err}`);
    }
}

async function init() {
    try {
        const answers = await prompt(questions);

        if (answers.logoLETTER.length > 3) {
            console.log(`Sorry, but I can't accept more than 3 letters. Please try again.`);
            return;
        }

        const shape = answers.shapeLOGO.toLowerCase();
        const letters = answers.logoLETTER;
        const shapeColor = answers.shapeColor;
        const textColor = answers.textColor;

        const svgContent = generateSvg(shape, letters, shapeColor, textColor);

        await writeSvgToFile('logo.svg', svgContent);
    } catch (err) {
        console.error(`[ERROR] Error prompting user: ${err}`);
    }
}

init();
