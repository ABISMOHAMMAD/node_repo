// Load the required modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the server
const server = http.createServer((req, res) => {
  // Get the request method and URL
  const { method, url } = req;

  // Log the request method and URL
  console.log(`${method} ${url}`);

  // Set the response content type to plain text by default
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  switch (url) {
    case '/':
      // If the request URL is '/', respond with 'Hello World!'
      res.statusCode = 200; // Set the response status code to 200 (OK)
      res.end('Hello World!\n');
      break;

    case '/about':
      // If the request URL is '/about', serve the about.txt file
      fs.readFile(path.join(__dirname, 'about.txt'), 'utf8', (err, data) => {
        if (err) {
          res.statusCode = 500; // Set the response status code to 500 (Internal Server Error)