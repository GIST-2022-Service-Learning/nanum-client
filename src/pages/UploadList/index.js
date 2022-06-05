import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getMyBoard } from "../../api/boardAPI";
import api from "../../api/baseAPI";

const UploadList = () => {
  const [items, setItems] = useState([]);

  const fetch = async () => {
    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;

    const response = await getMyBoard();
    setItems(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {items &&
          items.map((item) => (
            <div
              className="item"
              key={item.id}
              style={{ backgroundImage: `url(${item.imgUrl})` }}
            ></div>
          ))}
        <div className="item none"></div>
        <div className="item none"></div>
      </Container>
      <Footer />
    </>
  );
};
export default UploadList;
