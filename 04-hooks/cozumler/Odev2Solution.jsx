import { useEffect, useState } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <ul>
      {posts.slice(0, 10).map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
