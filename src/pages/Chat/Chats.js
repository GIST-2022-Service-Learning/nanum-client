import Chat from "./Chat";
import "./Chats.css";
const Chats = () => {
  return (
    <div className="chats">
      <a href="/chat/1">
        <Chat
          name="Mark"
          message="YO whats up!"
          timestamp="40 seconds ago"
          profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
        ></Chat>
      </a>
      <a href="/chat/1">
        <Chat
          name="김건호"
          message="YO whats up!"
          timestamp="40 seconds ago"
          profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
        ></Chat>
      </a>
      <a href="/chat/1">
        <Chat
          name="고세연"
          message="YO whats up!"
          timestamp="40 seconds ago"
          profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
        ></Chat>
      </a>
      <a href="/chat/1">
        <Chat
          name="김김김"
          message="YO whats up!"
          timestamp="40 seconds ago"
          profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
        ></Chat>
      </a>
    </div>
  );
};
export default Chats;
