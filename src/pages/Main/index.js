import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getBoard } from "../../api/boardAPI";
import api from "../../api/baseAPI";
import Card from "./Card";

const Main = () => {
  const [items, setItems] = useState([]);

  const fetch = async () => {
    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;
    console.log(document.cookie.split("=")[1]);

    const response = await getBoard();
    console.log(response.data);
    setItems(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header />
      <Container>
        {items && items.map((item) => <Card props={item} key={item.id} />)}
      </Container>
      <Footer />
    </>
  );
};
export default Main;
