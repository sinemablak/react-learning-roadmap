import { useState } from "react";

function Preferences() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        Kabul Ediyorum
      </label>

      <p>{checked ? "Onaylandı" : "Onaylanmadı"}</p>
    </div>
  );
}

export default Preferences;
