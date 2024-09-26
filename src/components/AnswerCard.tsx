import styled from "styled-components";
import { QuizResult } from "../types/data";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ff4d4d;
  border-radius: 20px;
  padding: 1rem 2rem;
  margin-bottom: 25px;
  text-align: start;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Answer = styled.p<{ $isRight: boolean }>`
  color: ${({ $isRight }) => ($isRight ? "#32de84" : "#ff4d4d")};
`;
const Check = styled.div<{ $isRight?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isRight = true }) =>
    $isRight ? "#32de84" : "#F44636"};
  border-radius: 50%;
  color: white;
  flex-shrink: 0;

  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
  }
`;
const AnswerCard = ({
  question,
  commentary,
  userAnswer,
  answer,
  $isRight,
}: QuizResult) => {
  return (
    <Card>
      <div>
        <p>
          Q{userAnswer[0]}. {question}
        </p>
        <Answer $isRight={$isRight}>
          A{userAnswer[0]}.{" "}
          {$isRight ? (
            ""
          ) : (
            <>
              <span style={{ textDecoration: "line-through" }}>
                {userAnswer[1] === true
                  ? "O"
                  : userAnswer[1] === false
                  ? "X"
                  : userAnswer[1]}
              </span>
            </>
          )}{" "}
          {answer === true
            ? "O"
            : answer === false
            ? "X"
            : Array.isArray(answer)
            ? "(" + answer.join(", ") + ")"
            : answer}
        </Answer>
        <p>해설: {commentary}</p>
      </div>
      <Check $isRight={$isRight}>
        {$isRight ? (
          <i className="fa-solid fa-check" />
        ) : (
          <i className="fa-solid fa-x" />
        )}
      </Check>
    </Card>
  );
};

export default AnswerCard;
