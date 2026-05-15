import React from 'react';

function User({ user }) {
  return (
    <div className="User">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default User;