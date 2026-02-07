function Greeting({ name }) {
  return <h2>Merhaba {name}</h2>;
}

import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("Sinem");

  return (
    <div>
      <Greeting name={userName} />

      <button onClick={() => setUserName("Ali")}>
        İsmi Değiştir
      </button>
    </div>
  );
}

export default App;
