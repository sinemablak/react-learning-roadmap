import { useEffect, useState } from "react";

function LoadingExample() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Yükleniyor...</h2>;

  return (
    <ul>
      {data.slice(0, 10).map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default LoadingExample;
