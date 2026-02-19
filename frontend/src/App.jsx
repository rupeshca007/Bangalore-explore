import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth';
import CreateBlog from './pages/CreateBlog';
import Blogs from './pages/Blogs';
import CommunityView from './pages/CommunityView';

const PlaceholderPage = ({ title }) => (
  <section>
    <h1>{title}</h1>
    <p>This page is under construction.</p>
  </section>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState(null);

  // Check for existing token on load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // In a real app, you might decode the token
      // or call /api/auth/me
      setUser({ username: 'User' });
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            navigate={setCurrentPage}
            setSearchQuery={setSearchQuery}
            user={user}
          />
        );

      case 'login':
        return (
          <Auth
            setUser={setUser}
            setCurrentPage={setCurrentPage}
          />
        );

      case 'create-blog':
        return (
          <CreateBlog
            setCurrentPage={setCurrentPage}
          />
        );

      case 'blogs':
        return <Blogs />;

      case 'communities':
        return (
          <CommunityView
            pageTitle="Join a Community"
            initialSearchQuery={searchQuery}
            user={user}
          />
        );

      case 'explore':
        return (
          <CommunityView
            pageTitle="Explore Communities"
            initialSearchQuery=""
            user={user}
          />
        );

      case 'library':
        return (
          <CommunityView
            pageTitle="Library Communities"
            initialSearchQuery=""
            user={user}
          />
        );

      case 'help':
        return <PlaceholderPage title="Help" />;

      case 'contact':
        return <PlaceholderPage title="Contact Us" />;

      default:
        return (
          <Home
            navigate={setCurrentPage}
            setSearchQuery={setSearchQuery}
            user={user}
          />
        );
    }
  };

  return (
    <>
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        user={user}
        setUser={setUser}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </>
  );
};

export default App;
