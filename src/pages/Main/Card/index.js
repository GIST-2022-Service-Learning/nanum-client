import TinderCard from "react-tinder-card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { createHeart } from "../../../api/heartAPI";
import api from "../../../api/baseAPI";

const Card = ({ props }) => {
  const item = props;

  const [liked, setLiked] = useState(false);

  const handleLike = async (boardId) => {
    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;

    const response = await createHeart(boardId);
    console.log(response.data);
    setLiked(response.data);
  };

  return (
    <TinderCard className="swipe">
      <div style={{ backgroundImage: `url(${item.imgUrl})` }} className="card">
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
  );
};

export default Card;
