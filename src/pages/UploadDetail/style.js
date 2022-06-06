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

  .complete-btn {
    > button {
      width: 90vw;
      height: 30px;

      background-color: #4eabd2;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      color: aliceblue;
    }
  }
`;

export { Container };
