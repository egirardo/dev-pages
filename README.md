# DevPages

A developer profile platform that connects developers with employers. Build a profile showcasing your skills, or browse developers by their tech stack.

## Features

- **Developer Profiles**: Create and manage profiles with languages, frameworks, experience, and contact info
- **Smart Filtering**: Browse developers by years of experience, programming languages, frameworks, and preferences (Frontend/Backend/Full-stack)
- **Direct Contact**: View developer contact information, GitHub, LinkedIn, and portfolio links
- **User Authentication**: Secure login and registration system

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose
- **Template Engine**: Pug
- **Authentication**: JWT with bcrypt
- **Validation**: Joi
- **Styling**: Bootstrap 5

## Installation

1. Clone the repository

```bash
git clone https://github.com/egirardo/dev-pages.git
cd dev-pages
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file with:

```
MONGODB_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
PORT=3000
NODE_ENV=development
```

4. Start the server

```bash
npm start
```

5. Visit `http://localhost:3000`

## Usage

**For Developers:**

- Register/Login to create an account
- Fill out your profile with skills, experience, and contact info
- Keep your profile updated as you learn new technologies

**For Employers:**

- Browse the developer collection
- Filter by specific languages, frameworks, or experience level
- Contact developers directly through their provided information

## Authors

© Elsa Girardo and Laura Kotlinska 2026

## License

This project is open source and available under the MIT License.
