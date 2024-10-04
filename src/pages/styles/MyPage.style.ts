import styled from "styled-components";

const AnswerNote = styled.section`
  width: 60%;
  margin: auto;
  padding: 2rem 1rem;
  color: black;
  background-color: white;
  text-align: center;

  @media (max-width: 1280px) {
    width: 90%;
    margin-bottom: 40px;
    padding: 1rem 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 90px;
  margin-bottom: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
`;
const History = styled.div`
  width: 70%;
  display: flex;
  margin: auto;
  justify-content: space-evenly;

  @media (max-width: 700px) {
    width: 100%;
  }
`;
const HistoryElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  align-items: center;
  border-radius: 10px;
  font-size: large;
  background-color: white;
  padding: 2rem;
`;
const Icon = styled.img`
  width: 40px;
`;

export { AnswerNote, Title, History, HistoryElement, Icon };
