import { create } from "zustand";

interface AnswerState {
  userAnswer: Map<number, string | boolean>;
  setUserAnswer: (quizId: number, answer: string | boolean) => void;
}

export const useAnswerStore = create<AnswerState>((set) => ({
  userAnswer: new Map<number, string | boolean>(),
  setUserAnswer: (quizId, answer) =>
    set((state) => {
      const updatedAnswer = new Map(state.userAnswer);
      updatedAnswer.set(quizId, answer);
      return { userAnswer: updatedAnswer };
    }),
}));
