import { useState } from "react";

function ThemeChanger() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
        height: "100vh"
      }}
    >
      <button onClick={() => setDark(!dark)}>
        Tema Değiştir
      </button>
    </div>
  );
}

export default ThemeChanger;
