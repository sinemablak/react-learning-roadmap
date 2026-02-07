import { useEffect, useState } from "react";

function DataExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Hata oluştu</h2>;

  return <h2>Veri geldi</h2>;
}

export default DataExample;
