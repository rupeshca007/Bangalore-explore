import React, { useState } from 'react';
import api from '../api/api';
import Toast from '../components/Toast';

const CreateBlog = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({ title: '', summary: '', content: '' });
  const [toast, setToast] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/blogs', formData);
      setToast({ message: 'Blog published!', type: 'success' });
      setTimeout(() => setCurrentPage('blogs'), 1000);
    } catch {
      setToast({ message: 'Error creating blog', type: 'error' });
    }
  };

  return (
    <section>
      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required />
        <input name="summary" placeholder="Summary" onChange={handleChange} required />
        <textarea name="content" placeholder="Content" onChange={handleChange} required />
        <button type="submit">Publish</button>
      </form>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
};

export default CreateBlog;
