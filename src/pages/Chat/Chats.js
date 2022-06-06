import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Chat from "./Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <>
      <Header />
      <div className="chats">
        <a href="/chat/1">
          <Chat
            name="조성진"
            message="안녕하세요!!"
            timestamp="40 seconds ago"
            profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
          ></Chat>
        </a>
        <a href="/chat/1">
          <Chat
            name="송재명"
            message="안녕하세요!!"
            timestamp="40 seconds ago"
            profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
          ></Chat>
        </a>
        <a href="/chat/1">
          <Chat
            name="고세연"
            message="안녕하세요!!"
            timestamp="40 seconds ago"
            profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
          ></Chat>
        </a>
        <a href="/chat/1">
          <Chat
            name="조성진"
            message="안녕하세요!!"
            timestamp="40 seconds ago"
            profilePic="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/30/d478dd5f-69f0-4ace-bc37-49038cde773d.jpg"
          ></Chat>
        </a>
      </div>
      <Footer />
    </>
  );
};
export default Chats;
