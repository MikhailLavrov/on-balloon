export const sendOrder = async ({message}) => {

  const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHATID
  const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
  const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
  const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;

  if (message) {
    try {
      await fetch(POST_REQUEST_URL);
    } catch (error) {
      console.error('Произошла ошибка при отправке сообщения:', error);
    }
  }
};
