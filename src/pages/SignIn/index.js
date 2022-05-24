const SignIn = () => {
  return (
    <div>
      <form>
        <input placeholder="지스트 이메일"></input>
        <input placeholder="비밀번호"></input>
        <span>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </span>
        <button>로그인</button>
        <span>
          계정이 없으신가요?<a href="/signup">계정만들기</a>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
