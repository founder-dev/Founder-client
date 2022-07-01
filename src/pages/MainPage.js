import React, { useState } from 'react';
import Modal from '../components/Modal';
import HorizontalProgress from '../components/HorizontalProgress';
import useDetectScroll from '../hooks/useDetectScroll';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSurveyDone, setIsSurveyDone] = useState(false);
  const { scroll } = useDetectScroll();

  if (isLoggedIn === false)
    return (
      <>
        <HorizontalProgress scroll={scroll} />
        <div>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Open
          </button>
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} type="SignUpModal" />
          )}
        </div>
      </>
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
