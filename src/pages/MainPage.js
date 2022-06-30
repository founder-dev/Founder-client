import React, { useState } from 'react';
import Modal from '../components/Modal';
import SignUpModal from '../styles/SignUpModal';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} type="SurveyModal" />}
    </div>
  );
};

export default MainPage;
