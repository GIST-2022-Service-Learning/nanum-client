import styled from "@emotion/styled";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow-y: auto;

  position: absolute;
  width: 100vw;

  top: 75px;

  padding: 0 10px;
  box-sizing: border-box;
  gap: 10px;

  .item {
    border: 1px solid;
    height: 180px;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .none {
    border: transparent;
    background-color: transparent;
  }
`;

export { Container };
