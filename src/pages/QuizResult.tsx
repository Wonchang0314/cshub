import {
  BackGround,
  Container,
  Title,
  TestAnalysis,
  Box,
  Check,
  Buttons,
} from "./styles/QuizResult.style";
import { useAnswerStore } from "../store/answer";
import RadialProgressBar from "../components/RadialProgressBar";
import AnswerCard from "../components/AnswerCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quiz";
import { IncorrectAnswer } from "../types/data";

const QuizResult = () => {
  const { quiz, quizType, quizNum } = useQuizStore();
  const { userAnswer } = useAnswerStore();
  const userAnswerList = Array.from(userAnswer);
  const navigate = useNavigate();
  const incorrectAnswers: IncorrectAnswer[] = localStorage.getItem(
    "incorrectAnswers"
  )
    ? JSON.parse(localStorage.getItem("incorrectAnswers")!)
    : [];

  const calculateScore = (): number => {
    let correctAnswers = 0;

    userAnswerList.forEach((answer) => {
      const isCorrect =
        quizType === "객관식"
          ? answer[1] === quiz.MultipleQuestion[answer[0] - 1].answer
          : quizType === "빈칸 채우기"
          ? quiz.FillBlank[answer[0] - 1].answer.includes(
              answer[1] as string
            ) ||
            quiz.FillBlank[answer[0] - 1].answer.includes(
              (answer[1] as string).toUpperCase()
            ) ||
            quiz.FillBlank[answer[0] - 1].answer.includes(
              (answer[1] as string).toLowerCase()
            )
          : answer[1] === quiz.TrueOrFalse[answer[0] - 1].answer;

      if (isCorrect) {
        correctAnswers += 1;
      } else {
        const incorrectAnswer: IncorrectAnswer =
          quizType === "객관식"
            ? {
                question: quiz.MultipleQuestion[answer[0] - 1].question,
                correctAnswer: quiz.MultipleQuestion[answer[0] - 1].answer,
                userAnswer: answer[1],
                commentary: quiz.MultipleQuestion[answer[0] - 1].commentary!,
              }
            : quizType === "빈칸 채우기"
            ? {
                question: quiz.FillBlank[answer[0] - 1].question,
                correctAnswer: quiz.FillBlank[answer[0] - 1].answer.join(", "),
                userAnswer: answer[1],
                commentary: quiz.FillBlank[answer[0] - 1].commentary!,
              }
            : {
                question: quiz.TrueOrFalse[answer[0] - 1].question,
                correctAnswer: quiz.TrueOrFalse[answer[0] - 1].answer,
                userAnswer: answer[1],
                commentary: quiz.TrueOrFalse[answer[0] - 1].commentary!,
              };

        incorrectAnswers.unshift(incorrectAnswer);
      }
    });
    return correctAnswers;
  };

  const corrected = calculateScore();
  const percentage: number = Math.floor((corrected / quizNum) * 100);

  const handleClick = () => {
    localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
    sessionStorage.removeItem("quizData");
    sessionStorage.removeItem("quizType");
    sessionStorage.removeItem("quizNum");
    const solvedQuiz = localStorage.getItem("solvedQuiz");
    const updatedSolved = solvedQuiz ? parseInt(solvedQuiz) + 1 : 1;
    localStorage.setItem("solvedQuiz", String(updatedSolved));
    const correctRate = localStorage.getItem("correctRate");
    const updatedRate = correctRate
      ? Math.floor((parseInt(correctRate) + percentage) / updatedSolved)
      : percentage;
    localStorage.setItem("correctRate", String(updatedRate));
    navigate("/selectTopic");
  };

  const moveToMyPage = () => {
    localStorage.setItem("incorrectAnswers", JSON.stringify(incorrectAnswers));
    sessionStorage.removeItem("quizData");
    sessionStorage.removeItem("quizType");
    sessionStorage.removeItem("quizNum");
    const solvedQuiz = localStorage.getItem("solvedQuiz");
    const updatedSolved = solvedQuiz ? parseInt(solvedQuiz) + 1 : 1;
    localStorage.setItem("solvedQuiz", String(updatedSolved));
    const correctRate = localStorage.getItem("correctRate");
    const updatedRate = correctRate
      ? Math.floor((parseInt(correctRate) + percentage) / updatedSolved)
      : percentage;
    localStorage.setItem("correctRate", String(updatedRate));
    navigate("/myPage");
  };

  return (
    <BackGround>
      <Container>
        <Title>퀴즈 결과</Title>
        <TestAnalysis>
          <div>
            <RadialProgressBar percentage={percentage} />
            <p>{percentage}점</p>
          </div>
          <Box>
            <Check>
              <i className="fa-solid fa-check" />
            </Check>
            <p>{corrected}</p>
            <span>맞은 문제</span>
          </Box>
          <Box>
            <Check $isRight={false}>
              <i className="fa-solid fa-x" />
            </Check>
            <p>{userAnswerList.length - corrected}</p>
            <span>틀린 문제</span>
          </Box>
        </TestAnalysis>
        <main>
          {quizType === "객관식"
            ? userAnswerList.map((answer, i) => (
                <AnswerCard
                  key={i}
                  question={quiz.MultipleQuestion[answer[0] - 1].question}
                  commentary={quiz.MultipleQuestion[answer[0] - 1].commentary!}
                  userAnswer={answer}
                  answer={quiz.MultipleQuestion[answer[0] - 1].answer}
                  $isRight={
                    quiz.MultipleQuestion[answer[0] - 1].answer === answer[1]
                  }
                />
              ))
            : quizType === "참 또는 거짓"
            ? userAnswerList.map((answer, i) => (
                <AnswerCard
                  key={i}
                  question={quiz.TrueOrFalse[answer[0] - 1].question}
                  commentary={quiz.TrueOrFalse[answer[0] - 1].commentary!}
                  userAnswer={answer}
                  answer={quiz.TrueOrFalse[answer[0] - 1].answer}
                  $isRight={
                    quiz.TrueOrFalse[answer[0] - 1].answer === answer[1]
                  }
                />
              ))
            : userAnswerList.map((answer, i) => (
                <AnswerCard
                  key={i}
                  question={quiz.FillBlank[answer[0] - 1].question}
                  commentary={quiz.FillBlank[answer[0] - 1].commentary!}
                  userAnswer={answer}
                  answer={quiz.FillBlank[answer[0] - 1].answer}
                  $isRight={
                    typeof answer[1] === "string" &&
                    quiz.FillBlank[answer[0] - 1].answer.includes(answer[1])
                  }
                />
              ))}
        </main>
        <Buttons>
          <Button
            text="메인으로"
            fontWeight="bold"
            onClick={handleClick}
          ></Button>
          <Button
            text="마이페이지"
            fontSize="medium"
            fontWeight="bold"
            backGroundColor="#ff4d4d"
            hoverColor="#e04444"
            onClick={moveToMyPage}
          />
        </Buttons>
      </Container>
    </BackGround>
  );
};

export default QuizResult;
