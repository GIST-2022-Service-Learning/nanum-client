import styled from "@emotion/styled";

const Container = styled.div`
  .swipe {
    position: absolute;
    width: 100vw;
    height: calc(100% - 30px);
    display: flex;
    .card {
      position: relative;
      left: 0;
      right: 0;
      margin: auto;

      width: 600px;
      max-width: 85vw;
      height: 600px;

      padding: 20px;
      box-sizing: border-box;

      border-radius: 20px;

      background-size: cover;
      background-position: center;
      box-shadow: 0px 3px 25px 18px rgba(0, 0, 0, 0.05);

      .description {
        position: absolute;
        bottom: 10px;
      }
      .like-btn {
        position: absolute;
        bottom: 10px;
        right: 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export { Container };
