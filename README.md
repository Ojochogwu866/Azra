# Azra

## Overview

This project is a modern, responsive church website built with React. It features three main pages: Landing, Events, and Giving. The website incorporates smooth animations and integrates with various payment gateways for donations.

## Features

### 1. Landing Page
- Introduces the church and its mission
- Showcases upcoming events and announcements
- Provides quick links to other sections of the website

### 2. Events Page
- Displays a list of upcoming church events
- Fetches event data from a headless CMS (e.g., Strapi)
- Allows users to view event details and potentially RSVP

### 3. Giving Page
- Facilitates online donations and tithing
- Integrates with multiple payment gateways:
  - Paystack
  - Flutterwave
  - PayPal
- Provides options for one-time and recurring donations

## Technology Stack

- **Frontend**: React.js
- **Animations**: GSAP (GreenSock Animation Platform)
- **CMS**: Headless CMS (potentially Strapi)
- **Payment Integrations**: 
  - Paystack API
  - Flutterwave API
  - PayPal API
- **Styling**: [Your choice of CSS framework/methodology]

## Setup and Installation

1. Clone the repository:
   ```
   git clone [https://github.com/Ojochogwu866/Azra/]
   ```

2. Install dependencies:
   ```
   cd church-website
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary API keys and endpoints for your CMS and payment gateways.

4. Start the development server:
   ```
   npm start
   ```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
