import { useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";
const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "건호건호킴",
      image: "...",
      message: "안녕하세요",
    },
    {
      name: "건호건호킴",
      image: "...",
      message: "물건 나눔 받고 싶어요!",
    },
    {
      message: "네 좋아요!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH MARK ON 10/08/20</p>
      {messages.map((message, i) =>
        message.name ? (
          <div className="chatScreen__message" key={i}>
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text"> {message.message} </p>
          </div>
        ) : (
          <div className="chatScreen__message" key={i}>
            <p className="chatScreen__textUser"> {message.message} </p>
          </div>
        )
      )}

      <div className="chatScreen__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="메세지를 입력하세요"
            type="text"
          />
          <button className="chatScreen__inputButton" onClick={handleSend}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
