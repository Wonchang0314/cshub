import styled from "styled-components";
import { IncorrectAnswer } from "../types/data";

const Card = styled.div`
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ff4d4d;
  border-radius: 20px;
  padding: 1rem 2rem;
  margin-bottom: 25px;
  text-align: start;
  cursor: pointer;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: large;
  cursor: pointer;
`;
const Answer = styled.p`
  color: #32de84;
`;

const AnswerNoteCard = ({
  question,
  correctAnswer,
  userAnswer,
  commentary,
  onDelete,
}: IncorrectAnswer) => {
  return (
    <Card>
      <div>
        <p>Q. {question}</p>
        <Answer>
          A.{" "}
          {typeof correctAnswer === "boolean"
            ? correctAnswer
              ? "O"
              : "X"
            : correctAnswer}
        </Answer>
        <p style={{ textDecoration: "line-through", color: "#FF0800" }}>
          {userAnswer}
        </p>
        <p>해설: {commentary}</p>
      </div>
      <DeleteButton onClick={onDelete}>삭제</DeleteButton>
    </Card>
  );
};

export default AnswerNoteCard;
