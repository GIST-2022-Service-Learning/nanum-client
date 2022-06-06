import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getHeartBoard } from "../../api/boardAPI";
import api from "../../api/baseAPI";
import { Link } from "react-router-dom";

const LikeList = () => {
  const [items, setItems] = useState([]);

  const fetch = async () => {
    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;

    const response = await getHeartBoard();
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
            <Link to={`/likelist/${item.boardId}`} key={item.boardId}>
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
export default LikeList;
