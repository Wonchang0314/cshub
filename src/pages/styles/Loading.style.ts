import styled from "styled-components";

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
`;

const Icons = styled.div`
  font-size: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 700px) {
    font-size: 60px;
  }
`;
const SecondIcon = styled.div`
  font-size: 55px;
  display: flex;
  @media (max-width: 700px) {
    font-size: 45px;
  }
`;
const ThirdIcon = styled.div`
  font-size: 40px;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
`;

export { Container, Icons, SecondIcon, ThirdIcon, Text };
