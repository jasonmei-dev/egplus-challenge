import { useState, useEffect } from 'react';
import Table from './components/Table';
import Modal from './components/Modal';
import axios from 'axios';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    generateUsers();
  }, []);

  const generateUsers = async () => {
    const res = await axios.get('https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo');

    const data = res.data.results;
    setUsers(data);
  }

  const openModal = userData => {
    setShowModal(true);
    setUser(userData);
  }

  const closeModal = () => {
    setShowModal(false);
    setUser(null);
  }

  return (
    <div className="App">
      <Table users={users} openModal={openModal} />
      <Modal showModal={showModal} closeModal={closeModal} user={user} />
    </div>
  );
}

export default App;
