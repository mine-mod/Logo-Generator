class Triangle {
  static generateSvg(text, color, textColor) {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="150,50 100,150 200,150" fill="${color}" />
          <text x="150" y="150" font-family="Arial" font-size="40" text-anchor="middle" fill="${textColor}">
              ${text}
          </text>
      </svg>`;
  }
}

class Circle {
  static generateSvg(text, color, textColor) {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="100" r="50" fill="${color}" />
          <text x="150" y="150" font-family="Arial" font-size="40" text-anchor="middle" fill="${textColor}">
              ${text}
          </text>
      </svg>`;
  }
}

class Square {
  static generateSvg(text, color, textColor) {
      return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect x="100" y="50" width="100" height="100" fill="${color}" />
          <text x="150" y="150" font-family="Arial" font-size="40" text-anchor="middle" fill="${textColor}">
              ${text}
          </text>
      </svg>`;
  }
}

export { Triangle, Circle, Square };
