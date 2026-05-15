import { useState } from 'react';
import './App.css';

const initialItems = [
  { id: 1, text: 'Buy groceries' },
  { id: 2, text: 'Walk the dog' },
  { id: 3, text: 'Read a book' },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [nextId, setNextId] = useState(4);

  const handleAdd = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setError('Item cannot be empty.');
      return;
    }

    const duplicate = items.some(
      (item) => item.text.toLowerCase() === trimmed.toLowerCase()
    );

    if (duplicate) {
      setError('Item already exists in the list.');
      return;
    }

    const newItem = { id: nextId, text: trimmed };
    setItems([...items, newItem]);
    setNextId(nextId + 1);
    setInputValue('');
    setError('');
  };

  const handleRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="title">My Task List</h1>
        <p className="subtitle">{items.length} {items.length === 1 ? 'task' : 'tasks'} remaining</p>

        <div className="input-row">
          <input
            className={`input ${error ? 'input-error' : ''}`}
            type="text"
            placeholder="Add a new task..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className="btn-add" onClick={handleAdd}>Add</button>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <ul className="list">
          {items.length === 0 ? (
            <li className="empty-state">
              <span className="empty-icon">✓</span>
              <p>All done! Your list is empty.</p>
            </li>
          ) : (
            items.map((item) => (
              <li key={item.id} className="list-item">
                <span className="item-text">{item.text}</span>
                <button
                  className="btn-remove"
                  onClick={() => handleRemove(item.id)}
                  aria-label={`Remove ${item.text}`}
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>

        {items.length > 0 && (
          <button className="btn-clear" onClick={() => setItems([])}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
