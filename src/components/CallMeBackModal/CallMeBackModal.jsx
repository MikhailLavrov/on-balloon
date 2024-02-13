import React, {  useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import c from './CallMeBackModal.module.scss';

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
  },
};

const formTailLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 10,
    offset: 4,
  },
};

const CallMeBackModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const CallMeBackForm = () => {
    const [form] = Form.useForm();
    const onCheck = async () => {
      try {
        const values = await form.validateFields();
        console.log('Success:', values);
        setModalOpen(false)
      } catch (errorInfo) {
        console.log('Failed:', errorInfo);
      }
    };

    return (
      <Form
        form={form}
        name="dynamic_rule"
        style={{}}
      >
        <Form.Item
          {...formItemLayout}
          name="phone"
          label="Телефон"
          rules={[
            {
              required: true,
              message: 'Введите номер телефона',
            },
          ]}
        >
          <Input placeholder="Введите номер телефона" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          name="name"
          label="Имя"
          rules={[
            {
              message: 'Как вас зовут?',
            },
          ]}
        >
          <Input placeholder="Как вас зовут?" />
        </Form.Item>
        <Form.Item {...formTailLayout} style={{display: "flex", justifyContent: "center"}}>
          <Button type="button" onClick={onCheck} style={{backgroundColor: "#f83939", color: "#fff"}}>
            Отправить
          </Button>
        </Form.Item>
      </Form>
    );
  };

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
        <CallMeBackForm />;
      </Modal>
    </>
  );
};
export default CallMeBackModal;