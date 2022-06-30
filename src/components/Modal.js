import React from 'react';
import SignUpModal from '../styles/SignUpModal';
import WriterModal from '../styles/WriterModal';
import SurveyModal from '../styles/SurveyModal';

function Modal(props) {
  if (props.type === 'SignUpModal') {
    return <SignUpModal setOpenModal={props.setOpenModal} />;
  }
  if (props.type === 'WriterModal') {
    return <WriterModal setOpenModal={props.setOpenModal} />;
  }
  if (props.type === 'SurveyModal') {
    return <SurveyModal setOpenModal={props.setOpenModal} />;
  }
}

export default Modal;
