import Header from './components/Header'
import StatsPanel from './components/StatsPanel'
import AnnouncementBanner from './components/AnnouncementBanner'
import StudentCard from './components/StudentCard'
import Footer from './components/Footer'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Students', href: '#' },
  { label: 'Reports', href: '#' },
]

const stats = [
  { label: 'Total Students', value: '4', color: '#4f46e5' },
  { label: 'Active', value: '3', color: '#22c55e' },
  { label: 'On Probation', value: '1', color: '#f59e0b' },
  { label: 'Avg GPA', value: '3.5', color: '#06b6d4' },
]

const announcements = [
  { message: 'Final exams start on May 12, 2025.', date: 'Posted: April 20, 2025' },
  { message: 'Enrollment for next semester opens May 1.', date: 'Posted: April 18, 2025' },
  { message: 'Campus library hours extended until 10PM.', date: 'Posted: April 15, 2025' },
]

const students = [
  { name: 'Maria Santos', course: 'BS Computer Science', year: 3, gpa: 3.9, status: 'Active' },
  { name: 'Juan dela Cruz', course: 'BS Information Technology', year: 2, gpa: 3.6, status: 'Active' },
  { name: 'Ana Reyes', course: 'BS Computer Engineering', year: 4, gpa: 3.2, status: 'Active' },
  { name: 'Carlo Mendoza', course: 'BS Information Systems', year: 1, gpa: 2.4, status: 'Probation' },
]

const footerData = {
  schoolName: 'Polytechnic University',
  year: 2025,
  contact: 'registrar@university.edu.ph',
}

const App = () => {
  return (
    <div>
      <Header
        title="Student Portal"
        subtitle="Academic Information System"
        navLinks={navLinks}
      />

      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>Dashboard Overview</h2>

        <StatsPanel stats={stats} />

        <AnnouncementBanner announcements={announcements} />

        <h2 style={styles.sectionTitle}>Student Directory</h2>
        <div style={styles.studentGrid}>
          {students.map((student, index) => (
            <StudentCard
              key={index}
              name={student.name}
              course={student.course}
              year={student.year}
              gpa={student.gpa}
              status={student.status}
            />
          ))}
        </div>
      </main>

      <Footer
        schoolName={footerData.schoolName}
        year={footerData.year}
        contact={footerData.contact}
      />
    </div>
  )
}

const styles = {
  main: {
    maxWidth: '860px',
    margin: '0 auto',
    padding: '40px 24px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a202c',
    marginBottom: '20px',
  },
  studentGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
}

export default App
