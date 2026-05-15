// frontend/src/components/AddItem.js
import React, { useState } from 'react';
import axios from 'axios';

function AddItem({ onItemAdded }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setMessage('Name is required.');
      return;
    }

    const newItem = { name, description };

    axios.post('http://localhost:5000/items/add', newItem)
      .then(res => {
        setMessage(res.data);
        setName('');
        setDescription('');
        if (onItemAdded) onItemAdded(); // Notify parent to refresh list
        // Auto-clear message after 2 seconds
        setTimeout(() => setMessage(''), 2000);
        // Reload to show updated list
        window.location.reload();
      })
      .catch(err => {
        setMessage('Error adding item.');
        console.log(err);
      });
  };

  return (
    <div className="add-item-form">
      <h2>Add New Item</h2>
      {message && <p style={{ color: '#27ae60', fontWeight: 'bold' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name *</label>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label>Description</label>
        <textarea
          rows="3"
          placeholder="Item description (optional)"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
