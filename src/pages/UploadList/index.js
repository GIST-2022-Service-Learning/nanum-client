import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getMyBoard } from "../../api/boardAPI";
import api from "../../api/baseAPI";
import { Link } from "react-router-dom";

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
            <Link key={item.id} to={`/uploadlist/${item.id}`}>
              <div
                className="item"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              ></div>
            </Link>
          ))}
        <div className="item none"></div>
        <div className="item none"></div>
      </Container>
      <Footer />
    </>
  );
};
export default UploadList;
