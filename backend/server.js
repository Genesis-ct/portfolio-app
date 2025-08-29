// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// A simple API route
app.get('/api/projects', (req, res) => {
  // In a real application, you would fetch this from a database
  const projects = [
    { id: 1, name: 'Project Alpha', description: 'A detailed description of Project Alpha.' },
    { id: 2, name: 'Project Beta', description: 'A brief overview of Project Beta.' },
    { id: 3, name: 'Project Gamma', description: 'Showcasing the features of Project Gamma.' },
  ];
  res.json(projects);
});

// A route to handle contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Here you would typically send an email, save to a database, etc.
  console.log(`New contact message from ${name} (${email}): ${message}`);
  
  // Respond to the client
  res.status(200).json({ message: 'Message received successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});