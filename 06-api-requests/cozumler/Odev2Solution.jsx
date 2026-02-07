import { useState } from "react";

function PostSearch() {
  const [id, setId] = useState("");
  const [post, setPost] = useState(null);

  const searchPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(setPost);
  };

  return (
    <div>
      <input onChange={(e) => setId(e.target.value)} />
      <button onClick={searchPost}>Ara</button>

      {post && <h3>{post.title}</h3>}
    </div>
  );
}

export default PostSearch;
