import "./StudentList.css";

function StudentList({ students, loading }) {
  if (loading) {
    return <div className="list-card"><p className="empty-msg">Loading students...</p></div>;
  }

  return (
    <div className="list-card">
      <h2>Student Records <span className="count">{students.length}</span></h2>
      {students.length === 0 ? (
        <p className="empty-msg">No students yet. Add one above!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Course</th>
              <th>Date Added</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student._id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>{new Date(student.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
