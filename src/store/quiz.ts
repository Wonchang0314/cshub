import { create } from "zustand";
import { Difficulty, Quiz, QuizNum, QuizType } from "../types/data";

interface QuizState {
  isLoading: boolean;
  response: Quiz;
  quizType: QuizType;
  quizNum: QuizNum;
  difficulty: Difficulty;
  setIsLoading: (loading: boolean) => void;
  setResponse: (response: Quiz) => void;
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
  response: defaultQuestion,
  quizType: "객관식",
  quizNum: 5,
  difficulty: "하",
  setIsLoading: (loading) => set({ isLoading: loading }),
  setResponse: (response) => {
    set({ response });
    sessionStorage.setItem("quizData", JSON.stringify(response));
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
