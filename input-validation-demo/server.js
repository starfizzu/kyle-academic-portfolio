const express = require("express");
const { validateRegisterInput } = require("./middleware/validateInput");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/register", validateRegisterInput, (req, res) => {
  const { name, email } = req.body;

  return res.status(201).json({
    success: true,
    message: "Registration successful!",
    user: {
      name: name.trim(),
      email: email.trim().toLowerCase(),
    },
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

app.listen(PORT, () => {
  console.log(`\n✅  Input Validation Demo running on http://localhost:${PORT}`);
  console.log(`   POST http://localhost:${PORT}/register\n`);
});

module.exports = app; 
