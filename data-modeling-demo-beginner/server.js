require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const demoRoutes = require('./routes/demo.route');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Data Modeling Demo API',
    endpoints: {
      users: {
        'POST   /api/users': 'Create a user',
        'GET    /api/users': 'Get all users',
        'GET    /api/users/:id': 'Get user by ID',
        'DELETE /api/users/:id': 'Delete user and their tasks',
      },
      tasks: {
        'POST   /api/tasks': 'Create a task (requires userId)',
        'GET    /api/tasks': 'Get all tasks (with populated user)',
        'GET    /api/tasks/:id': 'Get task by ID (with populated user)',
        'PATCH  /api/tasks/:id': 'Update a task',
        'DELETE /api/tasks/:id': 'Delete a task',
      },
    },
  });
});

app.use('/api', demoRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, error: `Route '${req.originalUrl}' not found` });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
