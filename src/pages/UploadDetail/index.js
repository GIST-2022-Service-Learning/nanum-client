import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getDetailBoard } from "../../api/boardAPI";
import { useNavigate, useParams } from "react-router-dom";
import { getComment } from "../../api/commentAPI";
import api from "../../api/baseAPI";

const UploadDetail = () => {
  const { param } = useParams();

  const [item, setItem] = useState({});
  const [commentList, setCommentList] = useState([]);

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

    const response = await getDetailBoard(param);
    setItem(response.data);
    console.log(response);
    const comments = await getComment(param);
    setCommentList(comments.data);
  };

  useEffect(() => {
    auth();
    fetch();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="item-details">
          <div
            className="item-image"
            style={{ backgroundImage: `url(${item.imgUrl})` }}
          ></div>
        </div>
        <div className="comment-list">
          {commentList &&
            commentList.map((comment) => (
              <div className="comment" key={comment.id}>
                {comment.comment}
              </div>
            ))}
        </div>
        <div className="complete-btn">
          <button>나눔 완료</button>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default UploadDetail;
