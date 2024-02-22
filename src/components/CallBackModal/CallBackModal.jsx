import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import c from './CallBackModal.module.scss';
import { CallbackForm } from '../CallbackForm/CallbackForm';
import { useSelector } from 'react-redux';

export const CallBackModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isSubmittedState = useSelector(state => state.callMeBack.isSubmitted);

  useEffect(() => {
    if (isSubmittedState) {
      setModalOpen(false);
    }
  }, [isSubmittedState]);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Button type="button" onClick={handleModalOpen} className={c.callMeBack__button}>
        Обратный звонок
      </Button>
      <Modal
        className={c.callMeBack__modal}
        title="Мы вам перезвоним"
        centered
        footer={null}
        open={modalOpen}
        onCancel={handleModalClose}
      >
        {isSubmittedState && (
          <div className={c.callMeBack__submitCover}>
            <h2 className={c.callMeBack__submitTitle}>Заявка отправлена!</h2>
            <p className={c.callMeBack__submitSubtitle}>Мы вам перезвоним</p>
          </div>
        )}
        <CallbackForm className={c.callMeBack__form} />
      </Modal>
    </>
  );
};