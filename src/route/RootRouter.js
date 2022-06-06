import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Chats from "../pages/Chat/Chats";
import Main from "../pages/Main";
import ChatScreen from "../pages/Chat/ChatScreen";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import LikeList from "../pages/LikeList";
import Upload from "../pages/Upload";
import UploadList from "../pages/UploadList";
import LikeDetail from "../pages/LikeDetail";
import UploadDetail from "../pages/UploadDetail";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/likelist" element={<Outlet />}>
          <Route index element={<LikeList />} />
          <Route path=":param" element={<LikeDetail />} />
        </Route>
        <Route path="/upload" element={<Upload />} />
        <Route path="/uploadlist" element={<Outlet />}>
          <Route index element={<UploadList />} />
          <Route path=":param" element={<UploadDetail />} />
        </Route>

        <Route path="/chat" element={<Outlet />}>
          <Route index element={<Chats />} />
          <Route path=":person" element={<ChatScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
