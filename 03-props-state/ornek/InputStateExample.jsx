import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Merhaba {name}</h3>
    </div>
  );
}

export default NameInput;
