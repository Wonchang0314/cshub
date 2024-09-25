import OpenAI from "openai";
import { CardProps, Quiz, QuizOption, QuizType } from "../types/data";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const selectTopic = (card: CardProps): string => {
  if (card.topic === "프레임워크 및 라이브러리") {
    return "리액트, SSR과 CSR";
  } else return card.topic;
};

const selectQuizType = (quizType: QuizType) => {
  let promptInterface = "";

  if (quizType === "객관식") {
    promptInterface = `
      interface Quiz {
        MultipleQuestion: {
          question: string;
          options: string[];
          answer: string;
        }[];
      }
    `;
  } else if (quizType === "참 또는 거짓") {
    promptInterface = `
      interface Quiz {
        TrueOrFalse: {
          question: string;
          option: boolean;
          answer: boolean;
        }[];
      }
    `;
  } else if (quizType === "빈칸 채우기") {
    promptInterface = `
      interface Quiz {
        FillBlank: {
          question: string;
          answer: string[];
        }[];
      }
    `;
  }
  return promptInterface;
};

const cleanResponse = (rawResponse: string): string => {
  const jsonStart = rawResponse.indexOf("{");
  const jsonEnd = rawResponse.lastIndexOf("}");
  if (jsonStart !== -1 && jsonEnd !== -1) {
    return rawResponse.substring(jsonStart, jsonEnd + 1);
  }
  throw new Error("Given rawResponse has Invalid JSON format");
};

const fetchQuiz = async ({
  card,
  difficulty,
  quizNum,
  quizType,
}: QuizOption): Promise<Quiz> => {
  const topic = selectTopic(card);
  const promptInterface = selectQuizType(quizType);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a extremely accurate and diligent quiz generator specializing in high-quality computer science quizzes. Your only role is to create precise, well-structured quizzes based on the user's provided topics and difficulty levels.",
      },
      {
        role: "user",
        content: `
    다음은 ${topic}에 대한 ${quizType} 문제를 생성하기 위한 인터페이스입니다. 
    반드시 **순수 JSON 데이터**만 생성해 주세요. 
    형식에 맞추어, 불필요한 텍스트 없이 정확한 JSON만 출력해 주세요.
    **중요:** JSON 데이터는 {로 시작하고 }로 끝나야 하며, **정답은 하나 이상 포함될 수 있습니다**. 
    
    - **빈칸 채우기 문제의 경우**: 
      - 질문에는 반드시 빈칸(예: ___)을 포함해 주세요.
      - 대소문자를 구분하며, 완전히 동일한 단어는 중복하지 않습니다.
      - 의미가 동일한 단어(예: '자원'과 'resource', '인가'와 'Authorization')를 각각 개별 요소로 구분하여 **answers 배열**에 포함해 주세요. 예를 들어, "['자원', 'resource']"와 같이 입력.
      - JSON 형식에서는 한글과 영어로 된 정답을 분리해서 배열에 넣어 주세요. 동일한 의미를 가진 단어라도, 한글과 영어를 개별로 포함해 주세요.

    문제는 인터페이스 구조에 맞추어 정답을 포함하고, 추가적인 설명이나 불필요한 텍스트는 출력하지 마세요.
    ${promptInterface}

    아래 기준에 맞는 ${quizNum}개의 ${topic} 관련 ${quizType} 문제를 난이도로 한국어로 생성해 주세요:
    - **난이도 설정**: ${difficulty}
      - 하: 컴퓨터 공학을 학습한 비전공자가 풀 수 있을 정도의 쉬운 문제.
      - 중: 컴퓨터 공학 전공자가 관련 내용을 학습해야 풀 수 있는 문제.
      - 상: 해당 주제에 대한 깊은 이해가 필요하고, 문제 해결을 위해 추가적인 학습이 필요한 문제.
  `,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  const rawResponse = completion.choices[0].message.content!;
  const response = cleanResponse(rawResponse);
  return JSON.parse(response);
};

export default fetchQuiz;
