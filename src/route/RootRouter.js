import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Chats from "../pages/Chat/Chats";
import Main from "../pages/Main";
import ChatScreen from "../pages/Chat/ChatScreen";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Outlet />}>
          <Route index element={<Chats />} />
          <Route path=":person" element={<ChatScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
