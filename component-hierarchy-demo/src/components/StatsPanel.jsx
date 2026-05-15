const StatBox = ({ label, value, color }) => (
  <div style={{ ...styles.box, borderTopColor: color }}>
    <span style={{ ...styles.value, color }}>{value}</span>
    <span style={styles.label}>{label}</span>
  </div>
)

const StatsPanel = ({ stats }) => {
  return (
    <div style={styles.panel}>
      {stats.map((stat, index) => (
        <StatBox key={index} label={stat.label} value={stat.value} color={stat.color} />
      ))}
    </div>
  )
}

const styles = {
  panel: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    marginBottom: '32px',
  },
  box: {
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    padding: '20px 24px',
    flex: '1',
    minWidth: '140px',
    borderTop: '4px solid',
    boxShadow: '0 2px 10px rgba(0,0,0,0.07)',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  value: {
    fontSize: '28px',
    fontWeight: '700',
  },
  label: {
    fontSize: '13px',
    color: '#718096',
    fontWeight: '500',
  },
}

export default StatsPanel
