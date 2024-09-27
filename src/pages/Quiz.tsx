/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@components/Button";
import MultipleQuizCard from "@components/multipleQuestion/QuizCard";
import TrueOrFalseQuizCard from "@components/trueOrFalse/QuizCard";
import FillBlankQuizCard from "@components/fillBlank/QuizCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "@store/quiz";
import { useAnswerStore } from "@store/answer";

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
const QuizPage = () => {
  const { quiz, quizType, quizNum } = useQuizStore();
  const { userAnswer, resetUserAnswers } = useAnswerStore();
  const [currentNum, setCurrentNum] = useState(1);
  const [direction, setDirection] = useState(true);
  const xOffSet = window.innerWidth >= 700 ? (direction ? 100 : -100) : 0;
  const navigate = useNavigate();

  useEffect(() => {
    resetUserAnswers();
  }, []);

  const nextQuestion = () => {
    if (currentNum < quizNum) {
      setDirection(true);
      setCurrentNum((prev) => prev + 1);
    }
  };
  const prevQuestion = () => {
    if (currentNum > 1) {
      setDirection(false);
      setCurrentNum((prev) => prev - 1);
    }
  };
  const handleSubmit = () => {
    navigate("result");
  };

  return (
    <BackGround>
      <Box>
        <QuizCount>
          {currentNum} / {quizNum}
        </QuizCount>
        <ProgressBar>
          <InnerBar width={(currentNum / quizNum) * 100} />
        </ProgressBar>

        <motion.section
          key={currentNum}
          initial={{ opacity: 0, x: xOffSet }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -xOffSet }}
          transition={{ duration: 0.3 }}
        >
          {quizType === "객관식" && quiz.MultipleQuestion ? (
            <MultipleQuizCard
              questionId={currentNum}
              question={quiz.MultipleQuestion[currentNum - 1].question}
              options={quiz.MultipleQuestion[currentNum - 1].options}
              answer={quiz.MultipleQuestion[currentNum - 1].answer}
            />
          ) : quizType === "참 또는 거짓" && quiz.TrueOrFalse ? (
            <TrueOrFalseQuizCard
              questionId={currentNum}
              question={quiz.TrueOrFalse[currentNum - 1].question}
              option={quiz.TrueOrFalse[currentNum - 1].option}
              answer={quiz.TrueOrFalse[currentNum - 1].answer}
            />
          ) : quizType === "빈칸 채우기" && quiz.FillBlank ? (
            <FillBlankQuizCard
              questionId={currentNum}
              question={quiz.FillBlank[currentNum - 1].question}
              answer={quiz.FillBlank[currentNum - 1].answer}
            />
          ) : (
            ""
          )}
        </motion.section>
        <Buttons>
          <Button
            text="이전"
            fontSize="large"
            fontWeight="bold"
            onClick={prevQuestion}
            isDisabled={currentNum === 1}
          />
          <Button
            text={currentNum === Number(quizNum) ? "제출" : "다음"}
            fontSize="large"
            fontWeight="bold"
            onClick={
              currentNum === Number(quizNum) ? handleSubmit : nextQuestion
            }
            backGroundColor={
              currentNum === Number(quizNum) ? "#ff4d4d" : "#101010"
            }
            hoverColor={currentNum === Number(quizNum) ? "#e04444" : "#282828"}
            isDisabled={
              !userAnswer.has(currentNum) || userAnswer.get(currentNum) === ""
            }
          />
        </Buttons>
      </Box>
    </BackGround>
  );
};

export default QuizPage;
