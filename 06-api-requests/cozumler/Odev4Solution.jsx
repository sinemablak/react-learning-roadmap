import { useEffect, useState } from "react";

function UserDropdown() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <select>
      {users.map(user => (
        <option key={user.id}>{user.name}</option>
      ))}
    </select>
  );
}

export default UserDropdown;
