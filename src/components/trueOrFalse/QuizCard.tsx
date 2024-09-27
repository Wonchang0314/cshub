import styled from "styled-components";
import { TrueOrFalse } from "../../types/data";
import { useState } from "react";
import { useAnswerStore } from "../../store/answer";
import { motion } from "framer-motion";

const Card = styled.div`
  width: 55%;
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
const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-shrink: 1;
`;
const Option = styled(motion.button)<{ isClicked: boolean }>`
  width: 125px;
  height: 125px;
  cursor: pointer;
  display: block;
  font-size: xx-large;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  color: ${({ isClicked }) => (isClicked ? "#ff4d4d" : "lightgray")};
  border: 2px solid ${({ isClicked }) => (isClicked ? "#ff4d4d" : "lightgray")};

  &:hover {
    border: 2px solid #ff4d4d;
    color: #ff4d4d;
    margin: -2px;
  }

  @media (max-width: 700px) {
    width: 75px;
    height: 75px;
  }
`;
interface TrueOrFalseProps extends TrueOrFalse {
  questionId: number;
}
const QuizCard = ({ questionId, question }: TrueOrFalseProps) => {
  const [isSelected, setIsSelected] = useState<boolean | null>(null);
  const { setUserAnswer } = useAnswerStore();

  const handleOptionClick = (option: boolean) => {
    setIsSelected(option);
    setUserAnswer(questionId, option);
  };

  return (
    <Card>
      <Question>Q. {question}</Question>
      <Options>
        <Option
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          isClicked={isSelected === true}
          onClick={() => handleOptionClick(true)}
        >
          O
        </Option>
        <Option
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          isClicked={isSelected === false}
          onClick={() => handleOptionClick(false)}
        >
          X
        </Option>
      </Options>
    </Card>
  );
};

export default QuizCard;
