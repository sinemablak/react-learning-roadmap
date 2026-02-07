import { useEffect, useState } from "react";
import axios from "axios";

function AxiosExample() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => setPosts(res.data));
  }, []);

  return (
    <ul>
      {posts.slice(0, 10).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default AxiosExample;
