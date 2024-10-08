import styled from "styled-components";
import { QuizResult } from "../types/data";

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid lightgray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  margin-bottom: 25px;
  text-align: start;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Answer = styled.p<{ $isRight: boolean }>`
  color: ${({ $isRight }) => ($isRight ? "#a4c639" : "red")};
`;
const Check = styled.div<{ $isRight?: boolean }>`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isRight = true }) =>
    $isRight ? "#A4C639" : "#F44636"};
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
