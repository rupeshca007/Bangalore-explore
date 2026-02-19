import React, { useEffect, useState } from 'react';
import api from '../api/api';
import Modal from '../components/Modal';

const CommunityView = ({ pageTitle, user }) => {
  const [communities, setCommunities] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      const res = await api.get('/communities');
      setCommunities(res.data);
    };
    fetchCommunities();
  }, []);

  return (
    <section>
      <h1>{pageTitle}</h1>

      {communities.map(comm => (
        <div key={comm._id}>
          <h2>{comm.title}</h2>
          <p>{comm.description}</p>
          <button onClick={() => setSelected(comm)}>Read More</button>
        </div>
      ))}

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        <p>{selected?.fullDescription}</p>
      </Modal>
    </section>
  );
};

export default CommunityView;
