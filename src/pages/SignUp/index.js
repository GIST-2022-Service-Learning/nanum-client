import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    username: "",
    verificationCode: "",
    password: "",
    passwordConfirm: "",
  });
  const [errorText, setErrorText] = useState("");

  const handleCreateCode = async () => {
    const emailRegex = /@(gm.)?gist.ac.kr$/;
    if (!emailRegex.test(input.email)) {
      setErrorText("지스트 메일을 이용해주세요");
      return;
    }
    setErrorText("");
    console.log("ABCDEF");
    return;
  };
  // console.log(input);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "verificationCode") {
      if (value.length > 6) {
        return;
      }
      setInput({ ...input, [name]: value.toUpperCase() });
      return;
    }
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.password === input.passwordConfirm) {
      const response = await postSignUp(input);
      const status = response.status;
      console.log(status);
      if (status < 400) {
        console.log(status);
        navigate("/");
      } else {
        setErrorText("인증코드를 정확히 입력해주세요.");
        return;
      }
    } else {
      setErrorText("비밀번호가 일치하지 않습니다.");
    }
  };
  const postSignUp = (input) => {
    let result = 400;
    if (input.verificationCode === "ABCDEF") {
      result = 200;
    }
    const res = { status: result, data: "fake-body" };
    return res;
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div className="email-wrapper">
            <input
              name="email"
              type="email"
              placeholder="지스트 이메일"
              onChange={handleChange}
            ></input>
            <button
              className="verification-btn"
              type="button"
              onClick={handleCreateCode}
            >
              인증
            </button>
          </div>
          <div className="verificationCode-wrapper">
            <input
              name="verificationCode"
              value={input.verificationCode}
              placeholder="인증번호"
              onChange={handleChange}
            ></input>
          </div>

          <div className="password-wrapper">
            <input
              name="password"
              value={input.password}
              type="password"
              placeholder="비밀번호"
              onChange={handleChange}
            ></input>
          </div>
          <div className="passwordConfirm-wrapper">
            <input
              name="passwordConfirm"
              value={input.passwordConfirm}
              type="password"
              placeholder="비밀번호 확인"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <button className="signup-btn">회원가입</button>
          </div>
          <div>
            <span>
              이미 계정이 있으신가요?<a href="/signin">로그인</a>
            </span>
          </div>
          <div>
            <span className="error-msg">{errorText}</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
