const chatId = '-1002006231945';
const BOT_TOKEN = '7103517816:AAG86TXNqQRxBOFDdwQkKe7Bs__cKgo9H1w';
const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

export const TelegramChatButton = ({ buttonText, className, message, outerHandler, disabled }) => {

  const sendToTelegramChat = async () => {
    const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
    if (message) {

        try {
        await fetch(POST_REQUEST_URL);
        outerHandler();
      } catch (error) {
        console.error('Произошла ошибка при отправке сообщения:', error);
      }}
    
  };
  
  return (
    <button onClick={sendToTelegramChat} className={className} disabled={disabled} htmlType="submit">
      {buttonText}
    </button>
  );
};

// https://t.me/share/url?url=ссылка&text=описание
// → tg://msg_url?url=ссылка&text=описание
