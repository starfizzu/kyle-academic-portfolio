import { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    try {
      const response = await fetch("/students");
      const result = await response.json();
      if (result.success) {
        setStudents(result.data);
      }
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Student Records System</h1>
        <p>Manage and track student enrollment</p>
      </header>
      <main className="app-main">
        <StudentForm onStudentAdded={fetchStudents} />
        <StudentList students={students} loading={loading} />
      </main>
    </div>
  );
}

export default App;
