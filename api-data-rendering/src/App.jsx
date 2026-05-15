import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import Loader from "./components/Loader";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <span className="header-badge">JSONPlaceholder API</span>
          <h1 className="header-title">User Directory</h1>
          <p className="header-subtitle">
            Live data fetched from a public REST API
          </p>
        </div>
      </header>

      <main className="main">
        {loading && <Loader />}

        {error && (
          <div className="error-box">
            <span className="error-icon">⚠</span>
            <div>
              <strong>Failed to load data</strong>
              <p>{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <>
            <p className="result-count">{users.length} users loaded</p>
            <DataList users={users} />
          </>
        )}

        {!loading && !error && users.length === 0 && (
          <p className="empty-state">No users found.</p>
        )}
      </main>

      <footer className="footer">
        <p>Built with React + Vite · Data from jsonplaceholder.typicode.com</p>
      </footer>
    </div>
  );
}
