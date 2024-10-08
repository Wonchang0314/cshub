import styled from "styled-components";
import { FillBlank } from "../../types/data";
import React, { useState } from "react";
import { useAnswerStore } from "../../store/answer";

const Card = styled.div`
  width: 60%;
  margin: auto;
  @media (max-width: 1280px) {
    width: 80%;
  }
`;
const Question = styled.p`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 25px;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: medium;
  }
`;
const Input = styled.input`
  width: 80%;
  height: 70px;
  padding: 0 1rem;
  font-size: x-large;
  border-radius: 10px;
  overflow-x: scroll;

  &:focus {
    outline-color: #6f2dbd;
  }
  @media (max-width: 700px) {
    font-size: large;
  }
`;
interface FillBlankProps extends FillBlank {
  questionId: number;
}
const QuizCard = ({ questionId, question }: FillBlankProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { setUserAnswer } = useAnswerStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue.trim());
    setUserAnswer(questionId, newValue.trim());
  };

  return (
    <Card>
      <Question>Q. {question}</Question>
      <Input value={inputValue} onChange={handleChange}></Input>
    </Card>
  );
};

export default QuizCard;
