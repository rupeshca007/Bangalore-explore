import React from 'react';

const Navbar = ({ currentPage, setCurrentPage, user, setUser }) => {

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'blogs', label: 'Blogs' },
    { id: 'communities', label: 'Communities' },
    { id: 'explore', label: 'Explore' },
    { id: 'library', label: 'Library' },
    { id: 'help', label: 'Help' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setCurrentPage('home');
    alert('Logged out successfully');
  };

  return (
    <header>
      <nav>
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a
                className={currentPage === link.id ? 'active' : ''}
                onClick={() => setCurrentPage(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}

          {user ? (
            <>
              <li>
                <a onClick={() => setCurrentPage('create-blog')} style={{color: '#4cd137'}}>
                  + Create Blog
                </a>
              </li>
              <li>
                <a onClick={handleLogout} style={{color: '#e84118'}}>
                  Logout ({user.username})
                </a>
              </li>
            </>
          ) : (
            <li>
              <a onClick={() => setCurrentPage('login')}>
                Login / Register
              </a>
            </li>
          )}

          <li>
            <a onClick={() => setCurrentPage('contact')}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
