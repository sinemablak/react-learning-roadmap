import { useEffect, useState } from "react";

function ErrorExample() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("wrong-url")
      .then(res => res.json())
      .then(setData)
      .catch(() => setError(true));
  }, []);

  if (error) return <h2>Hata oluştu</h2>;

  return <div>Veri yüklendi</div>;
}

export default ErrorExample;
