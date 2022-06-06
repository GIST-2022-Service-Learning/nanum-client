import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getBoard } from "../../api/boardAPI";
import api from "../../api/baseAPI";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const auth = () => {
    if (document.cookie.split("=")[1] === undefined) {
      navigate("/signin");
    }
  };
  const fetch = async () => {
    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;
    const response = await getBoard();
    setItems(response.data);
  };

  useEffect(() => {
    auth();
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
