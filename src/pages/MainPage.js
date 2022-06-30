import React, { useState } from "react";
import Modal from '../components/Modal';

const MainPage =()=>{ 
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

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default MainPage;