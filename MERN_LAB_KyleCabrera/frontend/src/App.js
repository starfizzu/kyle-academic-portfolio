// frontend/src/App.js
import React from 'react';
import ItemList from './components/ItemList';
import AddItem from './components/AddItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MERN App</h1>
      <AddItem />
      <ItemList />
    </div>
  );
}

export default App;
