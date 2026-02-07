import { useState } from "react";

function GreetingApp() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Merhaba {name}</h2>
    </div>
  );
}

export default GreetingApp;
