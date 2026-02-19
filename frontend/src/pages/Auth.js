import React, { useState } from 'react';
import api from '../api/api';
import Toast from '../components/Toast';

const Auth = ({ setUser, setCurrentPage }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [toast, setToast] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const res = await api.post(endpoint, formData);

      localStorage.setItem('token', res.data.token);
      setUser({ username: formData.username || 'User' });

      setToast({ message: 'Success!', type: 'success' });

      setTimeout(() => setCurrentPage('home'), 1000);

    } catch (err) {
      setToast({ message: 'Error occurred', type: 'error' });
    }
  };

  return (
    <section>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span onClick={() => setIsLogin(!isLogin)} style={{cursor: 'pointer'}}>
          {isLogin ? ' Register' : ' Login'}
        </span>
      </p>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </section>
  );
};

export default Auth;
