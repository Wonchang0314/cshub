import styled from "styled-components";
import Option from "./Option";
import { MultipleQuestion } from "../../types/data";
import { useAnswerStore } from "../../store/answer";

const Card = styled.div`
  width: 80%;
  margin: auto;
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
const Options = styled.ul`
  padding: 0 2rem;
  gap: 10px;
`;
interface MultipleQuizProps extends MultipleQuestion {
  questionId: number;
}
const QuizCard = ({ questionId, question, options }: MultipleQuizProps) => {
  const { userAnswer, setUserAnswer } = useAnswerStore();

  const handleOptionClick = (option: string) => {
    setUserAnswer(questionId, option);
  };

  return (
    <Card>
      <Question>Q. {question}</Question>
      <Options>
        {options.map((option, idx) => (
          <Option
            key={idx}
            content={option}
            isClicked={userAnswer.get(questionId) === option}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </Options>
    </Card>
  );
};

export default QuizCard;
