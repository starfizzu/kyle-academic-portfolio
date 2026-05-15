const Header = ({ title, subtitle, navLinks }) => {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.subtitle}>{subtitle}</p>
      </div>
      <nav style={styles.nav}>
        {navLinks.map((link, index) => (
          <a key={index} href={link.href} style={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    letterSpacing: '0.02em',
  },
  subtitle: {
    fontSize: '13px',
    opacity: 0.8,
  },
  nav: {
    display: 'flex',
    gap: '24px',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    opacity: 0.9,
  },
}

export default Header
