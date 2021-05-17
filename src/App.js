import { useState, useEffect } from 'react';
import Table from './components/Table';
import axios from 'axios';

import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    generateUsers();
  }, []);

  const generateUsers = async () => {
    const res = await axios.get('https://randomuser.me/api/?results=15&exc=login,info,registered,id&noinfo');

    const data = res.data.results;
    // console.log(res.data.results);
    setUsers(data);
  }

  return (
    <div className="App">
      <Table users={users} />
    </div>
  );
}

export default App;
