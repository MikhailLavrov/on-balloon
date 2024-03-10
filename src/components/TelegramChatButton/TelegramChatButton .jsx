const chatId23 = '-112030425060768293011924354';
const BOT_TOKEN44 = 'w103517816:AAG86TXNqQRxBOFDdwQkKe7Bs__cKgo9H17';
const characters = BOT_TOKEN44.split('');
const firstCharacter = characters[0];
characters[0] = characters[characters.length - 1];
characters[characters.length - 1] = firstCharacter;
const BOT_TOKEN24 = characters.join('');
const BASE_URL = `https://api.telegram.org/bot${BOT_TOKEN24}`;

export const TelegramChatButton = ({ buttonText, className, message, outerHandler, disabled }) => {

  const sendToTelegramChat = async () => {
    const chatId14 = chatId23.split('').filter((_, index) => index % 2 === 0).join('');
    const POST_REQUEST_URL = `${BASE_URL}/sendMessage?chat_id=${chatId14}&text=${encodeURIComponent(message)}`;
    
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
