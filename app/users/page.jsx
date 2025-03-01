"use client"; // Ensures it's a client component

import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async (id) => {
    try {
      await fetch("/api/user", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      // Update state to remove deleted user
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="users-list">
      <h2 className="users-list__title">All Users</h2>

      {loading ? (
        <p className="users-list__loading">Loading users...</p>
      ) : users.length > 0 ? (
        <ul className="users-list__items">
          {users.map((user) => (
            <li key={user._id} className="users-list__item">
              <span className="users-list__name">{user.name}</span>
              <span className="users-list__age">Age: {user.age}</span>
              <button
                className="users-list__delete-button"
                onClick={() => handleDelete(user._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="users-list__empty">No users found.</p>
      )}
    </div>
  );
};

export default UsersList;
