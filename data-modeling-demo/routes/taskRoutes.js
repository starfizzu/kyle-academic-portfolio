const express = require("express");
const router  = express.Router();
const Task    = require("../models/Task");

// POST /api/tasks — Create a new task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    // Populate user info immediately on creation
    await task.populate("userId", "name email");
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// GET /api/tasks — Get all tasks (with populated user)
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("userId", "name email role")
      .sort({ createdAt: -1 });
    res.json({ success: true, count: tasks.length, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/tasks/user/:userId — Get all tasks for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId })
      .populate("userId", "name email")
      .sort({ createdAt: -1 });
    res.json({ success: true, count: tasks.length, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/tasks/:id — Get single task
router.get("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("userId", "name email");
    if (!task) return res.status(404).json({ success: false, message: "Task not found" });
    res.json({ success: true, data: task });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// PUT /api/tasks/:id — Update task
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("userId", "name email");
    if (!task) return res.status(404).json({ success: false, message: "Task not found" });
    res.json({ success: true, data: task });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE /api/tasks/:id — Delete task
router.delete("/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ success: false, message: "Task not found" });
    res.json({ success: true, message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
