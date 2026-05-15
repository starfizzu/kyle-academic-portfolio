const Footer = ({ schoolName, year, contact }) => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© {year} {schoolName}. All rights reserved.</p>
      <p style={styles.contact}>Contact: {contact}</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1a202c',
    color: '#a0aec0',
    padding: '20px 40px',
    textAlign: 'center',
    marginTop: '48px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  text: {
    fontSize: '13px',
  },
  contact: {
    fontSize: '12px',
    color: '#718096',
  },
}

export default Footer
