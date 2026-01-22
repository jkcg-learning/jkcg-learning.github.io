# Jyothish Portfolio

A modern React portfolio website built with React 18.

## Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jyothish-portfolio
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode

Start the development server:
```bash
npm start
```

This will:
- Fetch GitHub profile data (if `USE_GITHUB_DATA=true` in `.env`)
- Start the React development server
- Open the app in your browser at `http://localhost:3000`

The page will automatically reload when you make changes.

### Production Build

Build the project for production:
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_GITHUB_TOKEN=your_github_token
GITHUB_USERNAME=your_github_username
USE_GITHUB_DATA=false
# MEDIUM_USERNAME=your_medium_username
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run format` - Format code with Prettier
- `npm run check-format` - Check code formatting
- `npm run deploy` - Deploy to GitHub Pages

## Technologies Used

- React 18.3.1
- React Scripts 5.0.1
- Sass
- Lottie React (animations)
- React Reveal (animations)

## Notes

- The project uses `legacy-peer-deps` for compatibility with some older packages
- Some Sass deprecation warnings may appear but don't affect functionality
