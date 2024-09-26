import { create } from "zustand";
import { Difficulty, Quiz, QuizNum, QuizType } from "../types/data";

interface QuizState {
  isLoading: boolean;
  quiz: Quiz;
  quizType: QuizType;
  quizNum: QuizNum;
  difficulty: Difficulty;
  setIsLoading: (loading: boolean) => void;
  setQuiz: (response: Quiz) => void;
  setQuizType: (quizType: QuizType) => void;
  setQuizNum: (quizNum: QuizNum) => void;
  setDifficulty: (difficulty: Difficulty) => void;
}

const defaultQuestion: Quiz = {
  MultipleQuestion: [],
  TrueOrFalse: [],
  FillBlank: [],
};

export const useQuizStore = create<QuizState>((set) => ({
  isLoading: false,
  quiz: sessionStorage.getItem("quizData")
    ? JSON.parse(sessionStorage.getItem("quizData") as string)
    : defaultQuestion,
  quizType: sessionStorage.getItem("quizType")
    ? (sessionStorage.getItem("quizType") as QuizType)
    : "객관식",
  quizNum: sessionStorage.getItem("quizNum")
    ? (Number(sessionStorage.getItem("quizNum")) as QuizNum)
    : 5,
  difficulty: "하",
  setIsLoading: (loading) => set({ isLoading: loading }),
  setQuiz: (quiz) => {
    set({ quiz });
    sessionStorage.setItem("quizData", JSON.stringify(quiz));
  },
  setQuizType: (quizType) => {
    set({ quizType });
    sessionStorage.setItem("quizType", JSON.stringify(quizType));
  },
  setQuizNum: (quizNum) => {
    set({ quizNum });
    sessionStorage.setItem("quizNum", JSON.stringify(quizNum));
  },
  setDifficulty: (difficulty) => set({ difficulty }),
}));
