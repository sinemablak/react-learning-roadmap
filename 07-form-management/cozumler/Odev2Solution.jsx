import { useState } from "react";

function ValidationForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!email.includes("@")) {
      setError("Email hatalı");
    } else if (password.length < 6) {
      setError("Şifre kısa");
    } else {
      setError("Başarılı");
    }
  };

  return (
    <div>
      <input onChange={(e) => setEmail(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />

      <button onClick={validate}>
        Kontrol
      </button>

      <p>{error}</p>
    </div>
  );
}

export default ValidationForm;
