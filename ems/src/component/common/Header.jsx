import React, { useState, useEffect } from 'react';

export default function Header(props) {
  const [userName, setUserName] = useState('Admin'); // Default to 'Admin'

  useEffect(() => {
    if (props.data) {
      setUserName(props.data.firstname || 'Admin'); // Use 'Admin' as a fallback
    } else {
      setUserName('Admin');
    }
  }, [props.data]); // Re-run effect only when props.data changes

  const handleLogout = () => {
    localStorage.setItem('loggedInUser', '');
    props.changeUser('');
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">{userName}</span>
      </h1>
      <button
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-small"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}
