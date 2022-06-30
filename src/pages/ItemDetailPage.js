import React, { useState } from 'react';
import Modal from '../components/Modal';

const ItemDetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        후기 작성
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} type="WriterModal" />}
    </div>
  );
};

export default ItemDetailPage;
