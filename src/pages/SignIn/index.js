import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container } from "./style";
import logo from "../../img/nanum_logo.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /@(gm.)?gist.ac.kr$/;
    if (!emailRegex.test(input.email)) {
      setErrorText("지스트 메일을 이용해주세요");
      return;
    }
    const response = await postSignIn(input);
    const status = response.status;
    if (status < 400) {
      navigate("/");
    } else {
      setErrorText("비밀번호가 일치하지 않습니다.");
      return;
    }
  };
  const postSignIn = (input) => {
    let result = 400;
    if (input.password === "gist1!") {
      result = 200;
    }
    const res = { status: result, data: "fake-body" };
    return res;
  };
  return (
    <Container className="signin-container">
      <img className="nanum-logo" src={logo} alt="nanum_logo" />
      <form onSubmit={handleSubmit}>
        <div className="wrapper-in-form">
          <div className="input-wrapper email-input">
            <input
              name="email"
              type="email"
              placeholder="지스트 이메일"
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-wrapper password-input">
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleChange}
            ></input>
          </div>
          <div className="btn-wrapper">
            <button className="signin-btn">로그인</button>
          </div>
          <div>
            <span>
              <Link to="/">비밀번호를 잊으셨나요?</Link>
            </span>
          </div>
          <div>
            <span>
              계정이 없으신가요? <Link to="/signup">회원가입 </Link>
            </span>
          </div>
          <div>
            <span className="error-msg">{errorText}</span>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default SignIn;
