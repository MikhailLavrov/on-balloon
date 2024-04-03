export const TelegramChatButton = ({ buttonText, className, message, outerHandler, disabled }) => {
  
  const sendToTelegramChat = async () => {
    const CHAT_ID = process.env.TELEGRAM_CHATID
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
    const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
    
    if (message) {
      try {
        await fetch(POST_REQUEST_URL);
        outerHandler();
      } catch (error) {
        console.error('Произошла ошибка при отправке сообщения:', error);
      }
    }
  };
  
  return (
    <button onClick={sendToTelegramChat} className={className} disabled={disabled} htmltype="submit">
      {buttonText}
    </button>
  );
};

// https://t.me/share/url?url=ссылка&text=описание
// → tg://msg_url?url=ссылка&text=описание
