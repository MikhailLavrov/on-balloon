import React, {  useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import c from './CallMeBackModal.module.scss';
import { CallbackForm } from '../CallbackForm/CallbackForm';
import { useSelector } from 'react-redux';

const CallMeBackModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const submitted = useSelector((state) => state.submitted);
  
  useEffect(() => {
    if (submitted) {
      setModalOpen(false);
    }
  }, [submitted]);

  return (
    <>
      <Button type="button" onClick={() => setModalOpen(true)} className={c.callMeBack__button}>
        Обратный звонок
      </Button>
      <Modal
        title="Мы вам перезвоним"
        centered
        footer={null}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <CallbackForm className={c.callMeBack__form} />
      </Modal>
    </>
  );
};
export default CallMeBackModal;
