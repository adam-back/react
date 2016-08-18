# React

The purpose of this repository is for me to have a place to experiment with basic React.js learning. Currently, the master branch follows the development of Tyler McGinnis' (free) [React.js Fundamentals course](http://courses.reactjsprogram.com/courses/reactjsfundamentals).

# Features

This application takes two GitHub usernames, then displays some information about the users. The users can then battle to determine who's "ranked" higher on GitHub (really trivial algorithm).

The tutorial uses Bootstrap, but I used flex-box because that's what I'd use in production.

Error handling is minimal: just `console.error`.

# Learning Points

- Basic React
  - Props
  - State
  - Routing
  - Components
  - Containers
- Stateless/stateful components
- JSX
- Ecosystem
  - Webpack
  - Babel
  - Axios

# Run Locally

### Requirements

- Node.js (and npm)
- Webpack
- Internet Connection

### Steps

1. Clone down to local machine then `cd react/`
1. `npm install` from root directory.
1. `npm start`
 - Runs webpack bundling and dev server
1. Open your browser to [http://localhost:8080/](http://localhost:8080/)