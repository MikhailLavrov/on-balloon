import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import c from './CallBackModal.module.scss';
import { CallbackForm } from '../CallbackForm/CallbackForm';

export const CallBackModal = (props) => {
  const {
    buttonText='Обратный звонок',
    className,
  } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={handleModalOpen} className={className ? className : c.callMeBack__button}>
        {buttonText}
      </Button>
      <Modal
        className={`${c.callMeBack__modal} callMeBack__modal`}
        title="Заявка на обратный звонок"
        centered
        footer={null}
        open={modalOpen}
        onCancel={handleModalClose}
        onOk={handleModalClose}
      >
        <div className={c.callMeBack__wrapper}>
          <CallbackForm outerHandler={() => setTimeout(handleModalClose, 1500)} />
        </div>
      </Modal>
    </>
  );
};
