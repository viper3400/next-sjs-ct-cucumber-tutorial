# Next.js with Serenity/JS and Cucumber Tutorial

Welcome to the Next.js with Serenity/JS and Cucumber tutorial repository!

In this tutorial, we demonstrate how to integrate Behavior-Driven Development (BDD) scenarios into a Next.js project using Serenity/JS and Cucumber. We build upon the concepts covered in the component testing tutorial using Serenity/JS and Playwright.

## Tutorial Overview

- **Component Testing**: The tutorial begins with a demonstration of component testing using Serenity/JS and Playwright. We show how to test a simple component, which in this case, simulates a coffee counter for controlling coffee consumption.

- **Integrating BDD Scenarios**: Following the component testing, we dive into integrating BDD scenarios into the project. We utilize Serenity/JS BDD features and Cucumber to write user scenarios that run alongside component tests. This allows for comprehensive testing of both individual components and user interactions.

## Getting Started

To follow along with the tutorial, you can clone this repository and install the dependencies:

```bash
git clone https://github.com/viper3400/next-sjs-ct-cucumber-tutorial.git
cd next-sjs-ct-cucumber-tutorial
npm install
```

Ensure you have Node.js and npm installed on your machine.

## Running the Tests

To run the BDD tests, execute the following command:

```bash
npm run test:cucumber
```

This will execute the Cucumber tests and generate a BDD report in the `target/site` folder.
