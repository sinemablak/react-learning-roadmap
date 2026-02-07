import { useState } from "react";

function UserForm() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input name="name" onChange={handleChange} />
      <input name="surname" onChange={handleChange} />
      <input name="phone" onChange={handleChange} />
    </div>
  );
}

export default UserForm;
