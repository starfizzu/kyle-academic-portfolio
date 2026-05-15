const StudentCard = ({ name, course, year, gpa, status }) => {
  const statusColor = status === 'Active' ? '#22c55e' : '#f59e0b'

  return (
    <div style={styles.card}>
      <div style={styles.avatar}>
        {name.charAt(0).toUpperCase()}
      </div>
      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        <p style={styles.course}>{course}</p>
        <p style={styles.detail}>Year {year} &nbsp;|&nbsp; GPA: {gpa}</p>
      </div>
      <span style={{ ...styles.badge, backgroundColor: statusColor }}>
        {status}
      </span>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
    transition: 'transform 0.2s',
  },
  avatar: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: '#4f46e5',
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '3px',
  },
  course: {
    fontSize: '13px',
    color: '#4f46e5',
    fontWeight: '500',
    marginBottom: '4px',
  },
  detail: {
    fontSize: '13px',
    color: '#718096',
  },
  badge: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#ffffff',
    flexShrink: 0,
  },
}

export default StudentCard
