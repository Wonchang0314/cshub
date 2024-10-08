import { IncorrectAnswer } from "../types/data";
import {
  AnswerNote,
  Title,
  History,
  HistoryElement,
  Icon,
} from "./styles/MyPage.style";
import solvedIcon from "../assets/solvedIcon.svg";
import checkIcon from "../assets/checkIcon.svg";
import AnswerNoteCard from "../components/AnswerNoteCard";
import { useState } from "react";
import Button from "../components/Button";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import html2pdf from "html2pdf.js";

const MyPage = () => {
  const solvedQuiz: number = localStorage.getItem("solvedQuiz")
    ? parseInt(localStorage.getItem("solvedQuiz")!)
    : 0;
  const correctRate: number = localStorage.getItem("correctRate")
    ? parseInt(localStorage.getItem("correctRate")!)
    : 0;
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswer[]>(
    localStorage.getItem("incorrectAnswers")
      ? JSON.parse(localStorage.getItem("incorrectAnswers")!)
      : []
  );

  const handleDelete = (index: number) => {
    const updatedAnswers = incorrectAnswers.filter((_, i) => i !== index);
    setIncorrectAnswers(updatedAnswers);
    localStorage.setItem("incorrectAnswers", JSON.stringify(updatedAnswers));
  };

  const handleExportPDF = () => {
    const element = document.getElementById("answer-note-content");
    const buttons = document.querySelectorAll<HTMLButtonElement>(".no-print");
    buttons.forEach((button) => (button.style.display = "none"));
    console.log(buttons);

    const opt = {
      margin: 0.5,
      filename: "오답노트.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };
    html2pdf()
      .set(opt)
      .from(element)
      .save()
      .then(() => {
        // PDF가 생성된 후 버튼을 다시 표시
        buttons.forEach((button) => (button.style.display = ""));
      });
  };

  return (
    <AnswerNote>
      <Title>오답노트</Title>
      <History>
        <HistoryElement>
          <Icon src={solvedIcon} alt="quizIcon" />
          <span>내가 푼 퀴즈 갯수</span>
          <span>{solvedQuiz}개</span>
        </HistoryElement>
        <HistoryElement>
          <Icon src={checkIcon} alt="quizIcon" />
          <span>평균 정답률</span>
          <span>{correctRate}%</span>
        </HistoryElement>
      </History>
      <main id="answer-note-content">
        {incorrectAnswers.length > 0 ? (
          incorrectAnswers.map((quiz, i) => (
            <AnswerNoteCard
              key={i}
              question={quiz.question}
              commentary={quiz.commentary}
              userAnswer={quiz.userAnswer}
              correctAnswer={quiz.correctAnswer}
              onDelete={() => handleDelete(i)}
            />
          ))
        ) : (
          <p>기록이 없습니다.</p>
        )}
      </main>
      {incorrectAnswers.length > 0 ? (
        <Button
          text="PDF로 내보내기"
          fontWeight="bold"
          width="180px"
          backGroundColor="#6f2dbd"
          hoverColor="#5a21a6"
          onClick={handleExportPDF}
        />
      ) : (
        ""
      )}
    </AnswerNote>
  );
};

export default MyPage;
