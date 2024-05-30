
# Email Form Project

This project is a simple email form built using HTML, CSS, and JavaScript. It includes form validation, a loading spinner, and success/error messages that overlay the entire screen. The form submission is handled using Formspree, and the backend server is built with Node.js and Express.js.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Requirements

1. **Formspree account:**
   
   Make sure you sign up for a Formspree account [here](https://formspree.io/). Create a new Dashboard project to obtain a form ID.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/email-form-project.git
   cd email-form-project
   ```

2. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```sh
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your Formspree form ID:

   ```env
   FORM_ID=your_form_id_here
   ```

## Usage

1. **Run the server:**

   ```sh
   node server.js
   ```

2. **Open your browser and navigate to:**

   ```
   http://localhost:3000
   ```

3. **Fill out the form and submit.**

## Features

- Responsive form design
- Loading spinner while form submission is in progress
- Full-screen overlays for success and error messages with a gray tint
- Smooth transitions for showing and hiding overlays
- Form submission handled by Formspree
- Backend server built with Node.js and Express.js

## Project Structure

```plaintext
email-form-project/
│
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── index.html
│
├── .env
├── package.json
├── server.js
└── README.md
```