"use client"; 
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.name && user.age) {
      try {
        const response = await fetch('/api/user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert('User added successfully..!');
        const data = await response.json();
        console.log("User added:", data);
        alert('User added successfully');
        setUser({ name: "", age: "" }); // Reset form
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="user-form">
      <h1 className="user-form__title">Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="user-form__group">
          <label htmlFor="name" className="user-form__label">User Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="user-form__input"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-form__group">
          <label htmlFor="age" className="user-form__label">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            className="user-form__input"
            value={user.age}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="user-form__button">Add User</button>
      </form>
    </div>
  );
}
