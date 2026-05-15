const validateRegisterInput = (req, res, next) => {
  const errors = [];
  const { name, email, password } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    errors.push({ field: "name", message: "Name is required." });
  } else if (!/^[A-Za-z\s]+$/.test(name.trim())) {
    errors.push({
      field: "name",
      message: "Name must contain only letters and spaces.",
    });
  }

  if (!email || typeof email !== "string" || email.trim() === "") {
    errors.push({ field: "email", message: "Email is required." });
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.push({
        field: "email",
        message: "Email must be a valid email address (e.g. user@example.com).",
      });
    }
  }

  if (!password || typeof password !== "string" || password === "") {
    errors.push({ field: "password", message: "Password is required." });
  } else {
    const passwordErrors = [];

    if (password.length < 8) {
      passwordErrors.push("at least 8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push("one lowercase letter");
    }
    if (!/[0-9]/.test(password)) {
      passwordErrors.push("one number");
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      passwordErrors.push("one special character (!@#$%^&* …)");
    }

    if (passwordErrors.length > 0) {
      errors.push({
        field: "password",
        message: `Password must contain: ${passwordErrors.join(", ")}.`,
      });
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid input data",
      errors,
    });
  }

  next();
};

module.exports = { validateRegisterInput };
