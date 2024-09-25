import { create } from "zustand";
import { Quiz, QuizNum, QuizType } from "../types/data";

interface QuizState {
  isLoading: boolean;
  response: Quiz;
  setIsLoading: (loading: boolean) => void;
  setResponse: (response: Quiz) => void;
  quizType: QuizType;
  setQuizType: (quizType: QuizType) => void;
  quizNum: QuizNum;
  setQuizNum: (quizNum: QuizNum) => void;
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
  setIsLoading: (loading) => set({ isLoading: loading }),
  setResponse: (response) => {
    set({ response });
    sessionStorage.setItem("quizData", JSON.stringify(response));
  },
  setQuizType: (quizType) => {
    set({ quizType });
    sessionStorage.setItem("quizType", JSON.stringify(quizType));
  },
  setQuizNum: (quizNum) => set({ quizNum }),
}));
