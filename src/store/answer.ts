import { create } from "zustand";

interface AnswerState {
  userAnswer: Map<number, string | boolean>;
  setUserAnswer: (quizId: number, answer: string | boolean) => void;
  resetUserAnswers: () => void;
}

export const useAnswerStore = create<AnswerState>((set) => ({
  userAnswer: sessionStorage.getItem("userResponse")
    ? new Map<number, string | boolean>(
        JSON.parse(sessionStorage.getItem("userResponse")!)
      )
    : new Map<number, string | boolean>(),
  setUserAnswer: (quizId, answer) =>
    set((state) => {
      const updatedAnswer = new Map(state.userAnswer);
      updatedAnswer.set(quizId, answer);
      sessionStorage.setItem(
        "userResponse",
        JSON.stringify(Array.from(updatedAnswer))
      );
      return { userAnswer: updatedAnswer };
    }),
  resetUserAnswers: () =>
    set(() => ({
      userAnswer: new Map<number, string | boolean>(),
    })),
}));
