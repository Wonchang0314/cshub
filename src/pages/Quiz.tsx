/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  BackGround,
  Box,
  QuizCount,
  ProgressBar,
  InnerBar,
  Buttons,
} from "./styles/Quiz,style";
import Button from "../components/Button";
import MultipleQuizCard from "../components/multipleQuestion/QuizCard";
import TrueOrFalseQuizCard from "../components/trueOrFalse/QuizCard";
import FillBlankQuizCard from "../components/fillBlank/QuizCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quiz";
import { useAnswerStore } from "../store/answer";

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
    if (userAnswer.size === quizNum) {
      navigate("result");
    }
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
            backGroundColor="#6f2dbd"
            hoverColor="#5a21a6"
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
            backGroundColor="#6f2dbd"
            hoverColor="#5a21a6"
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
