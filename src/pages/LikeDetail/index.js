import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { useEffect, useState } from "react";
import { getDetailBoard } from "../../api/boardAPI";
import { useParams } from "react-router-dom";
import { getComment, postComment } from "../../api/commentAPI";
import api from "../../api/baseAPI";

const LikeDetail = () => {
  const { param } = useParams();

  const [item, setItem] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [input, setInput] = useState({
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;

    try {
      const response = await postComment(param, input);
      console.log(response);
      alert("등록 완료!");
    } catch (err) {
      console.log(err);
    }
  };

  const fetch = async () => {
    api.defaults.headers.common["Authorization"] = `${
      document.cookie.split("=")[1]
    }`;

    const response = await getDetailBoard(param);
    setItem(response.data);
    const comments = await getComment(param);
    setCommentList(comments.data);
  };

  useEffect(() => {
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
            commentList.map((comment, idx) => (
              <div className="comment" key={comment.id}>
                {idx + 1}: {comment.comment}
              </div>
            ))}
        </div>
        <div className="comment-form">
          <form onSubmit={handleSubmit}>
            <textarea
              name="comment"
              value={input.comment}
              onChange={handleChange}
            ></textarea>
            <button>입력</button>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};
export default LikeDetail;
