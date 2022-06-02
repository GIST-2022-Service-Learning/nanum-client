import { useState } from "react";
import Header from "../../components/Header";
import { createBoard } from "../../api/itemAPI";
import Footer from "../../components/Footer";
import { Container } from "./style";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Upload = () => {
  const [itemInput, setItemInput] = useState({
    title: "",
    content: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemInput({
      ...itemInput,
      [name]: value,
    });
  };

  const handleFileInput = (e) => {
    setItemInput({
      ...itemInput,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await createBoard(itemInput);
      console.log(response);
      alert("등록 완료!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <div className="wrapper-in-form">
            <div className="input-wrapper">
              <input
                name="title"
                onChange={handleChange}
                placeholder="상품명"
              />
            </div>
            <div className="input-wrapper">
              <textarea
                name="content"
                onChange={handleChange}
                placeholder="설명"
              />
            </div>
            <div className="input-wrapper file-input">
              <label className="input-file-button" htmlFor="file">
                <UploadFileIcon />
              </label>
              <input
                id="file"
                name="file"
                type="file"
                accept="image/jpg,impge/png,image/jpeg,image/gif"
                onChange={handleFileInput}
              ></input>
            </div>
            <div className="btn-wrapper">
              <button className="upload-btn" type="submit">
                등록
              </button>
            </div>
          </div>
        </form>
      </Container>
      <Footer />
    </>
  );
};
export default Upload;
