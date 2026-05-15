const AnnouncementBanner = ({ announcements }) => {
  return (
    <div style={styles.wrapper}>
      <h3 style={styles.heading}>📢 Announcements</h3>
      <ul style={styles.list}>
        {announcements.map((item, index) => (
          <li key={index} style={styles.item}>
            <span style={styles.dot}></span>
            <div>
              <p style={styles.text}>{item.message}</p>
              <p style={styles.date}>{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  wrapper: {
    backgroundColor: '#fffbeb',
    border: '1px solid #fde68a',
    borderRadius: '10px',
    padding: '20px 24px',
    marginBottom: '32px',
  },
  heading: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#92400e',
    marginBottom: '12px',
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#f59e0b',
    marginTop: '5px',
    flexShrink: 0,
  },
  text: {
    fontSize: '14px',
    color: '#1a202c',
    fontWeight: '500',
  },
  date: {
    fontSize: '12px',
    color: '#a16207',
    marginTop: '2px',
  },
}

export default AnnouncementBanner
