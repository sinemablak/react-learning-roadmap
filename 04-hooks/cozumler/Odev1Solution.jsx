import { useState } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <button onClick={() => setCount(count - 1)}>
        -
      </button>

      <button onClick={() => setCount(count + 5)}>
        +5
      </button>

      {count >= 10 && <p>10'a ulaştın!</p>}
    </div>
  );
}

export default AdvancedCounter;
