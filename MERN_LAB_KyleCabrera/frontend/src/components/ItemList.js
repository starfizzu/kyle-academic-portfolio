// frontend/src/components/ItemList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ItemList() {
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    axios.get('http://localhost:5000/items/')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = (id) => {
    axios.delete(`http://localhost:5000/items/${id}`)
      .then(() => {
        fetchItems(); // Refresh list after delete
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="item-list">
      <h2>Item List</h2>
      {items.length === 0 ? (
        <p className="empty-msg">No items yet. Add one above!</p>
      ) : (
        items.map(item => (
          <div className="item-card" key={item._id}>
            <div>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
            </div>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ItemList;
