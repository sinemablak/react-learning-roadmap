import { useState } from "react";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Sinem",
    age: 27
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>

      <button
        onClick={() =>
          setUser({ ...user, age: user.age + 1 })
        }
      >
        Yaş Arttır
      </button>
    </div>
  );
}

export default UserProfile;
