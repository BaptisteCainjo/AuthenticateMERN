// Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:5000/profile', { withCredentials: true });

        if (response && response.data) {
          setUser(response.data.user);
        } else {
          console.error("Réponse inattendue:", response);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          console.error(error.response.data);
        } else {
          console.error("Erreur inattendue:", error);
        }
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profil</h2>
      {user ? <p>Bienvenue, {user.email}</p> : <p>Non authentifié</p>}
    </div>
  );
};

export default Profile;
