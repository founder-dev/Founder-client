import React, { useState } from 'react';
import Modal from '../components/Modal';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn === true)
    return (
      <div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} type="SignUpModal" />}
      </div>
    );
  if (isLoggedIn === true && isSurveyDone === false)
    return (
      <div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >
          survey
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} type="SurveyModal" />}
      </div>
    );
  if (isLoggedIn === true && isSurveyDone === true) return null;
};

export default MainPage;
