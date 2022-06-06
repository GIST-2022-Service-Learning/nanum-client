import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .item-details {
    width: 100vw;
    padding: 0 10px;
    box-sizing: border-box;

    .item-image {
      border: 1px solid black;
      height: 180px;
      border-radius: 10px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  .comment-list {
    overflow: scroll;
    width: 100vw;
    height: 50vh;
    .comment {
      display: flex;
      align-items: center;
      padding: 10px;

      .comment-text {
        margin-left: 10px;
        background-color: lightgray;
        padding: 15px;
        border-radius: 20px;
      }
    }
  }

  .comment-form {
    padding: 5px;
    position: absolute;
    bottom: 50px;
    width: 100%;
    border-top: 1px solid lightgray;

    .wrapper-in-form {
      display: flex;
      justify-content: center;
      align-items: center;
      .comment-input {
        padding: 10px;
        max-height: 34px;
        box-sizing: border-box;
        height: auto;
        width: 70vw;
        border: 1px solid #ccc;
        border-radius: 5px;
        resize: none;
      }
      .comment-input-btn {
        border: none;
        border-radius: 5px;
        height: 34px;
        width: 60px;
        margin-left: 10px;
        background-color: #4eabd2;
        font-weight: bolder;
        color: aliceblue;
      }
    }
  }
`;

export { Container };
