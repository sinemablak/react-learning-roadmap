import { useState } from "react";

function ValidationForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Geçerli email gir");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={validate}>
        Kontrol Et
      </button>

      {error && <p>{error}</p>}
    </div>
  );
}

export default ValidationForm;
