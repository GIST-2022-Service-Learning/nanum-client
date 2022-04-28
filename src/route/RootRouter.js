import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../pages/Chat";
import Main from "../pages/Main";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
