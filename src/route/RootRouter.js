import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Chats from "../pages/Chat/Chats";
import Main from "../pages/Main";
import ChatScreen from "../pages/Chat/ChatScreen";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Upload from "../pages/Upload";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/chat" element={<Outlet />}>
          <Route index element={<Chats />} />
          <Route path=":person" element={<ChatScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
