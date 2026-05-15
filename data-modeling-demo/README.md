# Data Modeling Demo — MongoDB + Mongoose

## Project Structure
```
data-modeling-demo/
├── config/
│   └── db.js           # MongoDB connection
├── models/
│   ├── User.js         # User schema & model
│   └── Task.js         # Task schema & model (refs User)
├── routes/
│   ├── userRoutes.js   # CRUD routes for User
│   └── taskRoutes.js   # CRUD routes for Task
├── .env                # Environment variables
├── .env.example        # Template for .env
├── server.js           # Express app entry point
└── package.json
```

## Setup & Run
```bash
npm install
node server.js        # or: npm run dev  (uses nodemon)
```

## API Endpoints

### Users
| Method | Endpoint           | Description      |
|--------|--------------------|------------------|
| POST   | /api/users         | Create user      |
| GET    | /api/users         | Get all users    |
| GET    | /api/users/:id     | Get user by ID   |
| PUT    | /api/users/:id     | Update user      |
| DELETE | /api/users/:id     | Delete user      |

### Tasks
| Method | Endpoint                    | Description              |
|--------|-----------------------------|--------------------------|
| POST   | /api/tasks                  | Create task              |
| GET    | /api/tasks                  | Get all tasks (populated)|
| GET    | /api/tasks/:id              | Get task by ID           |
| GET    | /api/tasks/user/:userId     | Get tasks by user        |
| PUT    | /api/tasks/:id              | Update task              |
| DELETE | /api/tasks/:id              | Delete task              |

## Postman Test Flow
1. POST /api/users  →  copy the returned _id
2. POST /api/tasks  →  paste _id as userId
3. GET  /api/tasks  →  see populated user inside each task
