import { useState, useEffect } from 'react';
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
      <h1>Hello World</h1>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user.email}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
