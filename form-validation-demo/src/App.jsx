import Form from './components/Form'

function App() {
  return (
    <div style={styles.app}>
      <Form />
    </div>
  )
}

const styles = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', sans-serif",
  },
}

export default App
