import styled from "styled-components";
import { useAnswerStore } from "../store/answer";
import RadialProgressBar from "../components/RadialProgressBar";
import AnswerCard from "../components/AnswerCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useQuizStore } from "../store/quiz";

const BackGround = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: black;

  @media (max-width: 700px) {
    background-color: white;
  }
`;
const Container = styled.div`
  width: 60%;
  margin: auto;
  padding: 2rem 1rem;
  color: black;
  background-color: white;
  text-align: center;

  @media (max-width: 700px) {
    width: 90%;
    margin-bottom: 40px;
    padding: 1rem 0.5rem;
  }
`;
const Title = styled.h3`
  font-size: 2rem;
  margin-top: 70px;
  margin-bottom: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
`;
const TestAnalysis = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;
const Box = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Check = styled.div<{ $isRight?: boolean }>`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isRight = true }) =>
    $isRight ? "#32de84" : "#F44636"};
  border-radius: 50%;
  color: white;
  font-size: x-large;
`;

const QuizResult = () => {
  const { quiz, quizType, quizNum } = useQuizStore();
  const { userAnswer } = useAnswerStore();
  const userAnswerList = Array.from(userAnswer);
  const navigate = useNavigate();

  const calculateScore = (): number => {
    let correctAnswers = 0;

    userAnswerList.forEach((answer) => {
      if (
        quizType === "객관식" &&
        answer[1] === quiz.MultipleQuestion[answer[0] - 1].answer
      ) {
        correctAnswers += 1;
      } else if (
        quizType === "빈칸 채우기" &&
        quiz.FillBlank[answer[0] - 1].answer.includes(answer[1] as string)
      ) {
        correctAnswers += 1;
      } else if (
        quizType === "참 또는 거짓" &&
        answer[1] === quiz.TrueOrFalse[answer[0] - 1].answer
      ) {
        correctAnswers += 1;
      }
    });
    return correctAnswers;
  };

  const corrected = calculateScore();
  const percentage: number = Math.floor((corrected / quizNum) * 100);

  const handleClick = () => {
    sessionStorage.removeItem("quizData");
    sessionStorage.removeItem("quizType");
    sessionStorage.removeItem("quizNum");
    navigate("/selectTopic");
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
        <Button text="홈으로" onClick={handleClick} />
      </Container>
    </BackGround>
  );
};

export default QuizResult;
