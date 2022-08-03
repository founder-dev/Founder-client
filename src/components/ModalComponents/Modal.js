import React from 'react';
import SignUpModal from '../../Modals/SignUpModal';
import WriterModal from '../../Modals/WriterModal';

function Modal(props) {
  if (props.type === 'SignUpModal') {
    return <SignUpModal setOpenModal={props.setOpenModal} />;
  }
  if (props.type === 'WriterModal') {
    return (
      <WriterModal
        setOpenModal={props.setOpenModal}
        id={props.id}
        name={props.name}
        schedule={props.schedule}
        minPrice={props.minPrice}
      />
    );
  }
}

export default Modal;
