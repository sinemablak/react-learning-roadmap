import { useState } from "react";

function SearchUser() {
  const [user, setUser] = useState(null);

  const searchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => setUser(data));
  };

  return (
    <div>
      <button onClick={searchUser}>Kullanıcı Getir</button>

      {user && <h3>{user.name}</h3>}
    </div>
  );
}

export default SearchUser;
