import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onStudentAdded }) {
  const [formData, setFormData] = useState({ name: "", course: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.course.trim()) {
      setStatus({ message: "Please fill in all fields.", type: "error" });
      return;
    }

    setLoading(true);
    setStatus({ message: "", type: "" });

    try {
      const response = await fetch("/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ message: "Student added successfully!", type: "success" });
        setFormData({ name: "", course: "" });
        onStudentAdded();
      } else {
        setStatus({ message: result.message || "Failed to add student.", type: "error" });
      }
    } catch (error) {
      setStatus({ message: "Could not connect to server.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-card">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter student name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            id="course"
            type="text"
            name="course"
            placeholder="Enter course name"
            value={formData.course}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add Student"}
        </button>
        {status.message && (
          <p className={`status-msg ${status.type}`}>{status.message}</p>
        )}
      </form>
    </div>
  );
}

export default StudentForm;
