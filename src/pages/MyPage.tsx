import { IncorrectAnswer } from "../types/data";
import styled from "styled-components";
import AnswerNoteCard from "../components/AnswerNoteCard";
import { useState } from "react";

const Container = styled.section`
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

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 90px;
  margin-bottom: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
`;

const MyPage = () => {
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswer[]>(
    localStorage.getItem("incorrectAnswers")
      ? JSON.parse(localStorage.getItem("incorrectAnswers")!)
      : []
  );

  const handleDelete = (index: number) => {
    const updatedAnswers = incorrectAnswers.filter((_, i) => i !== index);
    setIncorrectAnswers(updatedAnswers);
    localStorage.setItem("incorrectAnswers", JSON.stringify(updatedAnswers));
  };

  return (
    <Container>
      <Title>오답노트</Title>
      <main>
        {incorrectAnswers.length > 0 ? (
          incorrectAnswers.map((quiz, i) => (
            <AnswerNoteCard
              key={i}
              question={quiz.question}
              commentary={quiz.commentary}
              userAnswer={quiz.userAnswer}
              correctAnswer={quiz.correctAnswer}
              onDelete={() => handleDelete(i)}
            />
          ))
        ) : (
          <p>오답 기록이 없습니다.</p>
        )}
      </main>
    </Container>
  );
};

export default MyPage;
