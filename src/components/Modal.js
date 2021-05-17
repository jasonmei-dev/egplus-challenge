import React, { useRef } from 'react'

const Modal = ({ showModal, closeModal, user }) => {
  const modalRef = useRef();

  const handleOutsideClick = e => {
    if (modalRef.current === e.target) {
      closeModal();
    }
  }
  return (
    <>
      { showModal && 
        <div className="Modal" ref={modalRef} onClick={handleOutsideClick}>
          <div className="modal-content">
            <div className="closeBtn" onClick={closeModal}>&times;</div>
            <h2>{user.name.first} {user.name.last}</h2>
            <img src={user.picture.large} alt={user.name.first} />
            <p><span>Email: </span>{user.email}</p>
            <p><span>Phone: </span>{user.phone}</p>
            <p><span>Cell: </span>{user.cell}</p>
          </div>
        </div>
      }
    </>
  )
}

export default Modal
