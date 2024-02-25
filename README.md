## Integration of Component Testing into React/Next.js with Playwright and Serenity/JS

### Overview
This repository serves as a tutorial and demonstration of integrating component testing into a React/Next.js application using Playwright and Serenity/JS. Component testing is crucial for ensuring the reliability and functionality of individual UI components within a larger application.

### Features
- **React/Next.js Setup**: Utilizes Next.js as the framework of choice for building the React application, following recommended guidelines.
- **Counter Component**: Implements a simple counter component with increment and decrement functionality, constrained within a defined range.
- **Playwright and Serenity/JS Integration**: Demonstrates the installation of necessary dependencies for testing, including Playwright and Serenity/JS, along with associated packages for assertions and reporting.
- **Test Specifications**: Provides test specifications using Playwright and Serenity/JS to verify the functionality and behavior of the counter component.
- **Serenity/JS Reporting**: Generates Serenity-BDD reports for clear visibility into test results and outcomes.

### Getting Started
1. **Setup**: Initialize a Next.js application following the provided guidelines.
2. **Counter Component**: Implement the counter component within the React application.
3. **Installation**: Install necessary dependencies for testing using npm.
4. **Configuration**: Update package.json with scripts for cleaning, executing tests, and generating reports.
5. **Playwright Configuration**: Configure Playwright settings and browser configurations for testing.
6. **Test Specifications**: Define test specifications for the counter component using Playwright and Serenity/JS.
7. **Run Tests**: Execute tests using `npm run test:ct` and find Serenity-BDD reports under `./target/site/serenity`.

### Usage
1. Clone the repository.
2. Install dependencies using npm.
3. Follow the provided steps for setup and configuration.
4. Run tests using `npm run test:ct`.
5. View Serenity-BDD reports for test results and outcomes.

### Contribution
Contributions are welcome! Feel free to open issues or pull requests for any improvements or additional features.

### License
This project is licensed under the [MIT License](LICENSE).