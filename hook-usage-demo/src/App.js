// src/App.js

// Step 3.1 - import useState
// Step 4.1 - import useEffect
import { useState, useEffect } from 'react';
import './App.css';

function App() {

  // Step 3.2 - initialize state variables
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');
  const [message, setMessage] = useState('Click a button to get started!');

  // Step 3.3 - functions that update state when buttons are clicked
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
    setMessage('Counter was reset back to 0.');
  }

  // Step 4.2 & 4.3 - useEffect that runs when count changes
  // the dependency array [count] means this only runs when count updates
  useEffect(() => {
    console.log('count changed to: ' + count);

    if (count > 0) {
      setMessage('Count is now ' + count + '. Keep going!');
    } else if (count < 0) {
      setMessage('Count went negative: ' + count);
    }

    // cleanup function - runs before the next effect
    return () => {
      console.log('cleaning up count effect...');
    };
  }, [count]);

  // Step 4.3 - useEffect with empty dependency array runs only once on mount
  useEffect(() => {
    console.log('App component mounted!');
    setMessage('App loaded! Try clicking the buttons below.');

    // cleanup runs when component unmounts
    return () => {
      console.log('App component unmounted!');
    };
  }, []);

  // Step 4.3 - useEffect that runs when theme changes
  useEffect(() => {
    console.log('theme changed to: ' + theme);
    document.body.style.backgroundColor = getThemeBgColor(theme);

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [theme]);

  // helper to get background color based on theme
  function getThemeBgColor(t) {
    if (t === 'blue')   return '#e8f0fe';
    if (t === 'green')  return '#e6f4ea';
    if (t === 'red')    return '#fce8e6';
    if (t === 'purple') return '#f3e8fd';
    return '#f1f3f4';
  }

  // helper to get button color based on theme
  function getThemeColor(t) {
    if (t === 'blue')   return '#1a73e8';
    if (t === 'green')  return '#137333';
    if (t === 'red')    return '#c5221f';
    if (t === 'purple') return '#7b1fa2';
    return '#5f6368';
  }

  // Step 5.1 - connect state to the UI
  return (
    <div className="app">

      <h1>React Hooks Lab</h1>
      <p className="subtitle">Practicing useState and useEffect</p>

      {/* Step 5.1 - message state is shown here */}
      <div className="message-box">
        <p>{message}</p>
      </div>

      {/* useState section */}
      <div className="section">
        <h2>useState - Counter</h2>
        <p className="section-desc">
          The count below is stored in state. When you click a button,
          setCount() updates the state and React re-renders the component.
        </p>

        {/* Step 5.1 - count state is displayed here */}
        <div
          className="counter"
          style={{ color: getThemeColor(theme) }}
        >
          {count}
        </div>

        {/* Step 3.3 - buttons call the handler functions */}
        <div className="buttons">
          <button onClick={handleDecrement}>- Decrement</button>
          <button onClick={handleReset} className="reset-btn">Reset</button>
          <button
            onClick={handleIncrement}
            className="primary-btn"
            style={{ backgroundColor: getThemeColor(theme) }}
          >
            + Increment
          </button>
        </div>
      </div>

      {/* useState for theme */}
      <div className="section">
        <h2>useState - Theme Color</h2>
        <p className="section-desc">
          The theme is also stored in state using useState.
          Picking a color calls setTheme() which triggers the useEffect below.
        </p>

        <div className="theme-buttons">
          <button onClick={() => setTheme('blue')}   className={theme === 'blue'   ? 'active' : ''}>Blue</button>
          <button onClick={() => setTheme('green')}  className={theme === 'green'  ? 'active' : ''}>Green</button>
          <button onClick={() => setTheme('red')}    className={theme === 'red'    ? 'active' : ''}>Red</button>
          <button onClick={() => setTheme('purple')} className={theme === 'purple' ? 'active' : ''}>Purple</button>
        </div>

        <p style={{ marginTop: '10px', color: '#555' }}>
          Current theme: <strong>{theme}</strong>
        </p>
      </div>

      {/* useEffect explanation */}
      <div className="section">
        <h2>useEffect - Side Effects</h2>
        <p className="section-desc">
          There are 3 useEffect hooks in this component:
        </p>
        <ul className="effect-list">
          <li>
            <strong>useEffect(fn, [])</strong> - runs once when the component mounts.
            Check the browser console to see it!
          </li>
          <li>
            <strong>useEffect(fn, [count])</strong> - runs every time count changes.
            It updates the message box above and logs to console.
          </li>
          <li>
            <strong>useEffect(fn, [theme])</strong> - runs every time theme changes.
            It changes the page background color as a side effect.
          </li>
        </ul>

        <div className="hint-box">
          💡 Open the browser Console (F12) to see all the useEffect logs!
        </div>
      </div>

      {/* Step 5.1 - showing current state values */}
      <div className="section">
        <h2>Current State Values</h2>
        <p className="section-desc">These update live as you interact above:</p>

        <div className="state-display">
          <div className="state-row">
            <span className="state-label">count:</span>
            <span className="state-value">{count}</span>
          </div>
          <div className="state-row">
            <span className="state-label">theme:</span>
            <span className="state-value">"{theme}"</span>
          </div>
          <div className="state-row">
            <span className="state-label">message:</span>
            <span className="state-value">"{message}"</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
