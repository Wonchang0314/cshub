import styled from "styled-components";

const BackGround = styled.div`
  background-color: #f6f9ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: black;

  @media (max-width: 700px) {
    background-color: white;
  }
`;
const Container = styled.div`
  width: 60%;
  margin: auto;
  padding: 2rem 1rem;
  color: black;
  background-color: white;
  text-align: center;

  @media (max-width: 700px) {
    width: 90%;
    margin-bottom: 40px;
    padding: 1rem 0.5rem;
  }
`;
const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
`;
const TestAnalysis = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;
const Box = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Check = styled.div<{ $isRight?: boolean }>`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isRight = true }) => ($isRight ? "#32de84" : "red")};
  border-radius: 50%;
  color: white;
  font-size: large;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 700px) {
    align-items: center;
    gap: 20px;
  }
`;

export { BackGround, Container, Title, TestAnalysis, Box, Check, Buttons };
