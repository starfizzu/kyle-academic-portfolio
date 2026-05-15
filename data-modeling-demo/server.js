require("dotenv").config();
const express   = require("express");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ─────────────────────────────────────────────────────────────────
app.use(express.json());

// ── Database ───────────────────────────────────────────────────────────────────
connectDB();

// ── Routes ─────────────────────────────────────────────────────────────────────
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// ── Root ───────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    message: "Data Modeling Demo API",
    endpoints: {
      users: {
        "POST   /api/users":        "Create a user",
        "GET    /api/users":        "Get all users",
        "GET    /api/users/:id":    "Get user by ID",
        "PUT    /api/users/:id":    "Update user",
        "DELETE /api/users/:id":    "Delete user",
      },
      tasks: {
        "POST   /api/tasks":              "Create a task",
        "GET    /api/tasks":              "Get all tasks (populated)",
        "GET    /api/tasks/:id":          "Get task by ID",
        "GET    /api/tasks/user/:userId": "Get tasks by user",
        "PUT    /api/tasks/:id":          "Update task",
        "DELETE /api/tasks/:id":          "Delete task",
      },
    },
  });
});

// ── 404 Handler ────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ── Start Server ───────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
