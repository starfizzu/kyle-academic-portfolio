export default function DataList({ users }) {
  return (
    <div className="grid">
      {users.map((user) => (
        <div key={user.id} className="card">
          <div className="card-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <div className="card-body">
            <h2 className="card-name">{user.name}</h2>
            <p className="card-email">✉ {user.email}</p>
            <p className="card-phone">📞 {user.phone}</p>
            <p className="card-company">🏢 {user.company.name}</p>
            <a
              href={`https://${user.website}`}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 {user.website}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
