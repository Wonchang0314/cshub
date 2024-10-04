import styled from "styled-components";

const BackGround = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: black;
  box-sizing: border-box;

  @media (max-width: 700px) {
    min-height: none;
    background-color: white;
    height: auto;
  }
`;
const Box = styled.div`
  width: 60%;
  margin: auto;
  padding: 2rem 1rem;
  color: black;
  background-color: white;
  text-align: center;

  @media (min-width: 700px) {
    flex-grow: 1;
  }
  @media (max-width: 700px) {
    width: 90%;
    margin: auto;
    padding: 1rem 0.5rem;
    height: auto;
  }
`;
const QuizCount = styled.p`
  margin-top: 50px;
  display: inline-block;
  padding: 0.7rem;
  border: 1px solid gray;
  border-radius: 2rem;
  color: gray;
`;

const ProgressBar = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 10px;
  background-color: #f5f5f5;
  font-weight: bold;
  position: relative;
  border-radius: 2rem;
  border: none;
  overflow: hidden;
`;
const InnerBar = styled.div<{ width: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: #ff4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  gap: 20px;
`;

export { BackGround, Box, QuizCount, ProgressBar, InnerBar, Buttons };
