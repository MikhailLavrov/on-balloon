import React from 'react';

const chatId = '-1002006231945';
const BOT_TOKEN = '7103517816:AAG86TXNqQRxBOFDdwQkKe7Bs__cKgo9H1w';
const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

const TelegramChatButton = ({ article, title }) => {
  const message = `Здравствуйте, меня заинтересовал товар:\nАртикул: ${article}\nНазвание: ${title}`;
  // const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${chatId}&text=${message}`;

  const openTelegramChat = async () => {
    const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    console.log('POST_REQUEST_URL:', POST_REQUEST_URL);
    try {
      const response = await fetch(POST_REQUEST_URL);
      console.log(`Response status: ${response.status}`);
      const data = await response.json();
      console.log('Response data:', data);
      console.log(`Сообщение успешно отправлено в телеграм. ${message}`);
    } catch (error) {
      console.error('Произошла ошибка при отправке сообщения в телеграм:', error);
    }
  };
  

  return (
    <button onClick={openTelegramChat}>
      Написать
    </button>
  );
};

export default TelegramChatButton;
