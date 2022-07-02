import React, { useState } from 'react';
import Modal from '../components/Modal';
import HorizontalProgress from '../components/MagazineComponents/HorizontalProgress';
import useDetectScroll from '../hooks/useDetectScroll';
import FounderLogo from '../assets/MainPageAssets/logo.png';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import { Logo } from '../components/FounderLogo';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isSurveyDone, setIsSurveyDone] = useState(false);

    return (
      <>
      <Logo src = {FounderLogo}/>
      <TopBar/>
      <div>파운더이미지가 들어갈예정</div> 
      <div>상품이 들어갈 예정</div>
      <>브랜드가 들어갈 예정</>
        { isLoggedIn === false &&
          <div>
          <button
            onClick={() => {
              setModalOpen(true);
            }}
          >
            회원가입
          </button>
          {modalOpen && (
            <Modal setOpenModal={setModalOpen} type="SignUpModal" />
          )}
        </div>
        } 

        { isLoggedIn === true && isSurveyDone === false &&
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
        }

        { isLoggedIn === true && isSurveyDone === true &&
          null
        }
      </>
    );
};

export default MainPage;
