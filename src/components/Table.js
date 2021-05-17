import React from 'react'

const Table = ({ users, openModal }) => {
  const formatDate = date => date.split("T")[0];

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Dath of Birth</th>
          <th>State</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => {
          return (
          <tr key={index} onClick={() => openModal(user)}>
            <td>{user.name.first} {user.name.last}</td>
            <td>{formatDate(user.dob.date)}</td>
            <td>{user.location.state}</td>
            <td>{user.location.country}</td>
          </tr>
            )
        })}
      </tbody>
    </table>
  )
}

export default Table
