import Header from "../../components/Header";
import TinderCard from "react-tinder-card";
import Footer from "../../components/Footer";
import { Container } from "./style";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        {/* {items &&
          items.map((item) => (
            <TinderCard className="swipe" key={item.name}>
              <div
                style={{ backgroundImage: `url(${item.url})` }}
                className="card"
              >
                <h3>{item.name}</h3>
              </div>
            </TinderCard>
          ))} */}

        <TinderCard className="swipe">
          <div
            style={{
              backgroundImage: `url("https://image.msscdn.net/images/goods_img/20190503/1034480/1034480_5_125.jpg")`,
            }}
            className="card"
          >
            <h3>가방</h3>
          </div>
        </TinderCard>
        <TinderCard className="swipe">
          <div
            style={{
              backgroundImage: `url("https://images.christiantoday.co.kr/data/images/full/343352/2021-10.jpg?w=654")`,
            }}
            className="card"
          >
            <h3>책</h3>
          </div>
        </TinderCard>
        <TinderCard className="swipe">
          <div
            style={{
              backgroundImage: `url("https://avatars.githubusercontent.com/u/65757344?v=4")`,
            }}
            className="card"
          >
            <h3>김건호</h3>
          </div>
        </TinderCard>
        <TinderCard className="swipe">
          <div
            style={{
              backgroundImage: `url("https://cdn.top-rider.com/news/photo/202106/61158_130059_722.jpg")`,
            }}
            className="card"
          >
            <h3>스포츠카</h3>
          </div>
        </TinderCard>
      </Container>
      <Footer />
    </>
  );
};
export default Main;
