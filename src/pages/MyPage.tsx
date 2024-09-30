import { IncorrectAnswer } from "../types/data";
import styled from "styled-components";
import AnswerNoteCard from "../components/AnswerNoteCard";
import { useState } from "react";
import Button from "../components/Button";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import html2pdf from "html2pdf.js";

const AnswerNote = styled.section`
  width: 60%;
  margin: auto;
  padding: 2rem 1rem;
  color: black;
  background-color: white;
  text-align: center;

  @media (max-width: 1280px) {
    width: 90%;
    margin-bottom: 40px;
    padding: 1rem 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-top: 90px;
  margin-bottom: 2rem;
  font-weight: 700;
  color: black;
  text-align: center;
`;

const MyPage = () => {
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
          <p>오답 기록이 없습니다.</p>
        )}
      </main>
      <Button
        text="PDF로 내보내기"
        fontWeight="bold"
        width="180px"
        onClick={handleExportPDF}
      />
    </AnswerNote>
  );
};

export default MyPage;
