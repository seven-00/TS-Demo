# Demo TypeScript Project

## Overview
This is a demo TypeScript project that showcases best practices for setting up, compiling, and running TypeScript applications.

## Features
- TypeScript configuration with `tsconfig.json`
- Scripts for building and running the project
- Example TypeScript functions and modules
- Linting and formatting with ESLint and Prettier

## Prerequisites
Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/demo-typescript-project.git
   cd demo-typescript-project
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Usage
### Running the Project
To compile and run the TypeScript project:
```sh
npm run build
npm start
```

Alternatively, you can run it in watch mode:
```sh
npm run dev
```

### Running Linter and Formatter
```sh
npm run lint
npm run format
```

## Project Structure
```
├── src
│   ├── index.ts      # Entry point
│   ├── utils.ts      # Utility functions
├── dist              # Compiled JavaScript files
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project metadata and scripts
└── README.md         # Project documentation
```

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

