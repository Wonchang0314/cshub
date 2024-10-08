import styled from "styled-components";
import { IncorrectAnswer } from "../types/data";
import { motion } from "framer-motion";

const Card = styled.div`
  color: black;
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
  @media print {
    .no-print {
      display: none !important;
    }
  }
`;
const DeleteButton = styled(motion.button)`
  background-color: #6f2dbd;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: large;
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    background-color: #5a21a6;
  }

  @media (max-width: 700px) {
    padding: 7px 12px;
  }
`;
const Answer = styled.p`
  color: #5305c7;
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
        <p style={{ textDecoration: "line-through", color: "#ffcd05" }}>
          {userAnswer}
        </p>
        <p>해설: {commentary}</p>
      </div>
      <DeleteButton
        className="no-print"
        whileTap={{ scale: 0.97 }}
        onClick={onDelete}
      >
        삭제
      </DeleteButton>
    </Card>
  );
};

export default AnswerNoteCard;
