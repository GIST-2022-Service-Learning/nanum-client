import Header from "../../components/Header";
import TinderCard from "react-tinder-card";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getBoard } from "../../api/boardAPI";
import api from "../../api/baseAPI";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { createHeart, deleteHeart } from "../../api/heartAPI";

const Main = () => {
  const [items, setItems] = useState([]);
  const [liked, setLiked] = useState(false);

  const fetch = async () => {
    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;

    const response = await getBoard();
    setItems(response.data);
  };

  const handleLike = async (boardId) => {
    if (!liked) {
      const response = await createHeart(boardId);
      console.log(response);
      setLiked(true);
    } else {
      const response = await deleteHeart(boardId);
      console.log(response);
      setLiked(false);
    }
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
            <TinderCard className="swipe" key={item.id}>
              <div
                style={{ backgroundImage: `url(${item.imgUrl})` }}
                className="card"
              >
                <div className="description">
                  <h2>{item.title}</h2>
                  <h3>{item.content}</h3>
                  <h4>{item.userId}</h4>
                </div>
                <div
                  className="like-btn"
                  onClick={() => {
                    handleLike(item.id);
                  }}
                >
                  {!liked ? (
                    <FavoriteBorderIcon fontSize="large" />
                  ) : (
                    <FavoriteIcon fontSize="large" color="error" />
                  )}
                </div>
              </div>
            </TinderCard>
          ))}
      </Container>
      <Footer />
    </>
  );
};
export default Main;
