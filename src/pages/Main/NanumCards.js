import { useState } from "react";
import TinderCard from "react-tinder-card";
import "./NanumCards.css";
const NanumCards = () => {
  const [items, setItems] = useState([
    {
      name: "bag",
      url: "https://cdn.pixabay.com/photo/2015/11/20/03/53/package-1052370__480.jpg",
    },
    {
      name: "wallet",
      url: "https://cdn.pixabay.com/photo/2016/04/13/05/29/wallet-1326017__480.jpg",
    },
    {
      name: "shoes",
      url: "https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708__480.jpg",
    },
  ]);

  return (
    <>
      <h2>nanum cards</h2>
      <div className="nanumCards__cardContainer">
        {items.map((item) => (
          <TinderCard className="swipe" key={item.name}>
            <div
              style={{ backgroundImage: `url(${item.url})` }}
              className="card"
            >
              <h3>{item.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </>
  );
};
export default NanumCards;
