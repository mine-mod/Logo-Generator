# SVG Logo Generator

A simple command-line tool to generate SVG logos based on user input. This tool allows you to create custom logos with various shapes, colors, and text.

## Features

- **Customizable Text:** Enter up to 3 characters for your logo.
- **Shape Selection:** Choose from triangle, circle, or square.
- **Color Options:** Specify colors for both the shape and text using color keywords or hex codes.
- **SVG Output:** Generates an SVG file (`logo.svg`) with the desired logo design.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mine-mod/Logo-Generator.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Logo-Generator
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Run the Application:**

   ```bash
   node index.js
   ```

2. **Follow the Prompts:**
   - Enter up to 3 characters for the logo text.
   - Choose the shape you want for your logo.
   - Specify the color for the shape (color keyword or hex code).
   - Specify the color for the text (color keyword or hex code).

3. **Check the Output:**
   - The generated SVG file will be saved as `logo.svg` in the project directory.
   - Open `logo.svg` in a web browser to view your custom logo.

## Example

```plaintext
Give me up to 3 letters for your logo? [ABC]
What shape do you want for your logo? [Circle]
Enter the color for the shape (color keyword or hex code): [green]
Enter the color for the text (color keyword or hex code): [blue]
```

The above inputs will create a logo with the text "ABC" in blue color, over a green circle.

## Contributing

Feel free to fork the repository and submit pull requests. For any issues or feature requests, open an issue on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
