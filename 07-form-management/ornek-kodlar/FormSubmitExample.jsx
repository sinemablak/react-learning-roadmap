import { useState } from "react";

function SubmitForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Gönder
      </button>
    </form>
  );
}

export default SubmitForm;
