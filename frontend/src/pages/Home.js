import React from 'react';

const Home = ({ navigate, setSearchQuery }) => {

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.querySelector('input');
    const query = input ? input.value : '';
    setSearchQuery(query);
    navigate('communities');
  };

  return (
    <>
      <section id="hero">
        <h1>Welcome to Bangalore Explore!</h1>
        <p>Explore local events and join vibrant communities.</p>
        <button className="btn" onClick={() => navigate('explore')}>
          Explore Now
        </button>
      </section>

      <section id="search">
        <h2>Search</h2>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Search communities..." />
          <button type="submit" className="btn">Search</button>
        </form>
      </section>
    </>
  );
};

export default Home;
