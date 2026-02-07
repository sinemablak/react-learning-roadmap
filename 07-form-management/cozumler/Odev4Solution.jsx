import { useState } from "react";

function Preferences() {
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Kadın"
          onChange={(e) => setGender(e.target.value)}
        />
        Kadın
      </label>

      <label>
        <input
          type="radio"
          value="Erkek"
          onChange={(e) => setGender(e.target.value)}
        />
        Erkek
      </label>

      <select onChange={(e) => setCity(e.target.value)}>
        <option>İstanbul</option>
        <option>Ankara</option>
      </select>

      <h3>{gender}</h3>
      <h3>{city}</h3>
    </div>
  );
}

export default Preferences;
