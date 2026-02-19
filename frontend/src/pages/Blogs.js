import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Modal from '../components/Modal';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await api.get('/blogs');
      setPosts(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <section>
      <h1>Latest Blogs</h1>

      {posts.map(post => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
          <button onClick={() => setSelectedPost(post)}>Read More</button>
        </div>
      ))}

      <Modal
        isOpen={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        title={selectedPost?.title}
      >
        <p>{selectedPost?.content}</p>
      </Modal>
    </section>
  );
};

export default Blogs;
