# Skincare Ecommerce Frontend

A front-end code challenge / demo for a **skincare e-commerce** site built with modern web tools.

## Table of Contents

- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup--installation)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Customization & Configuration](#customization--configuration)  
- [Future Improvements](#future-improvements)  
- [License](#license)  

---

## About

This project is a frontend implementation (code challenge) of an e-commerce site for skincare products. It allows users to browse products, view details, and (optionally) manage cart/checkout flows (depending on backend connection).  

## Features

- Product catalog / listing  
- Product detail views  
- Responsive design for mobile & desktop  
- Smooth UI interactions  
- Theming / styling via SCSS / CSS  
- (To be added) Cart, checkout, authentication, etc.  

## Tech Stack

- **Framework / Library**: Next.js (React-based)  
- **Language**: TypeScript  
- **Styling**: SCSS / CSS  
- **Bundler / Config**: Next’s built‑in configuration (with `next.config.mjs`)  
- **Utilities / Libraries**: (e.g. any state management, API fetching lib)  
- **Tooling / Setup**: pnpm / npm, etc.  

## Setup & Installation

1. Clone the repo:  
   ```bash
   git clone https://github.com/stiffynavales/skincare-ecommerce.git
   cd skincare-ecommerce
Install dependencies (choose one):

bash
Copy code
npm install
# or
pnpm install
# or
yarn
Run development server:

bash
Copy code
npm run dev
# or
pnpm dev
# or
yarn dev
Open your browser:
Visit http://localhost:3000 (or the port shown in terminal).

Usage
Browse the homepage / product pages

Click on a product to see detail

(If cart / checkout flow is implemented) Add items to cart, proceed to checkout

Use developer tools to inspect component structure, styles, etc.

Project Structure
Here’s a high-level overview of the folders & key files:

bash
Copy code
/app
/components
/hooks
/lib
/public
/styles
next.config.mjs
package.json
tsconfig.json
...
app — Top-level pages and routing

components — Reusable UI components

hooks — Custom React hooks

lib — Utility functions, API wrappers

public — Static assets (images, etc.)

styles — SCSS / CSS modules / global styles

Config files: Next config, TypeScript config, PostCSS, etc.

Customization & Configuration
To change theme or colors, update the SCSS / CSS files in styles/

To adjust routes or pages, modify under app/

If connecting to a backend API, replace placeholder fetches in lib/ or hook files

Configure environment variables if needed (e.g. NEXT_PUBLIC_API_URL)

Future Improvements
Add authentication (login / signup)

Integrate backend / API for real product data

Cart & checkout flow implementation

Order history, user profile

Search & filter functionality

Better error handling & loading states

Unit / integration tests

License
(If you have a license)
This project is licensed under the MIT License — see the LICENSE file for details.
