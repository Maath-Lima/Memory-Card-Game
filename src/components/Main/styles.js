import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 16px;
    color: #fff;
  }

  button {
    border: none;
    background: #191b28;

    img {
      height: 20px;
      width: 20px;
      margin: 10px;
    }
  }
`;

export const Board = styled.ul`
  height: 550px;
  width: 750px;
  background: #edab1d;
  list-style: none;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.li`
  background: #1c7ccc;
  height: 190px;
  width: 130px;
  margin: 15px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);

  img {
    height: ${props => (props.fliped ? "190px" : "150px")};
    width: 130px;
  }
`;
