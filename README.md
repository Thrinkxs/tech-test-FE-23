# Front-End Application for Payouts Management
This is a front-end application developed using React and TypeScript, styled with Styled Components, to manage payouts. Users can search for payouts by username and view the details.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)


## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: This comes with Node.js, but you can also use yarn if you prefer.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd tech-test-FE-23
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your web browser and go to [http://localhost:3000] or (http://localhost:5173) to access the application.

## Project Structure

- `components/`: Contains React components for various parts of the application.
- `styles/`: Contains Styled Components styles for components.

## API Integration

This application integrates with two API endpoints:

1. **Payouts Endpoint**

   - **Endpoint:** `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts`
   - **Method:** GET
   - **Description:** Retrieves a list of payouts. Each payout object contains fields like dateAndTime, status, value, and username.

2. **Search Endpoint**

   - **Endpoint:** `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=SEARCH_TERM`
   - **Method:** GET
   - **Description:** Allows searching for payouts by username. The application facilitates user search, optimizing the user experience.

