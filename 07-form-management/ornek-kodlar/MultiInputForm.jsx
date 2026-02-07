import { useState } from "react";

function MultiForm() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        name="name"
        onChange={handleChange}
      />

      <input
        name="email"
        onChange={handleChange}
      />

      <h3>{form.name}</h3>
      <h3>{form.email}</h3>
    </div>
  );
}

export default MultiForm;
