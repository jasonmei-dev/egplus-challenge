import React from 'react'

const Modal = ({ showModal, closeModal, user }) => {
  return (
    <>
      { showModal && 
        <div className="Modal">
          <div className="modal-content">
            <span className="closeBtn" onClick={closeModal}>&times;</span>
            <h2>{user.name.first} {user.name.last}</h2>
            <img src={user.picture.large} alt={user.name.first} />
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Cell: {user.cell}</p>
          </div>
        </div>
      }
    </>
  )
}

export default Modal
