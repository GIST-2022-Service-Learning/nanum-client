import { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import { getItems, putItem } from "../../api/itemAPI";
import "./NanumCards.css";

const NanumCards = () => {
  const [items, setItems] = useState([]);
  const [itemInput, setItemInput] = useState({
    name: "",
    url: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemInput({
      ...itemInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await putItem(itemInput);
      console.log(response);
      setItems(response.data);
      alert("등록 완료!");
    } catch (err) {
      console.log(err);
    }
  };

  const fetch = async () => {
    const response = await getItems();
    setItems(response.data);
  };

  useEffect(() => {
    fetch();
  }, [items]);

  return (
    <>
      <h2>nanum cards</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder={"상품명"} />
        <input name="url" onChange={handleChange} placeholder={"사진url"} />
        <button type="submit">등록</button>
      </form>
      <div className="nanumCards__cardContainer">
        {items &&
          items.map((item) => (
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
