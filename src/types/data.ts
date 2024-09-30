import html from "../assets/html.svg";
import javascript from "../assets/javascript.svg";
import reactLogo from "../assets/react.svg";
import network from "../assets/network.svg";
import linux from "../assets/linux.svg";
import dataStructure from "../assets/data-structure.svg";
import security from "../assets/security.svg";
import software from "../assets/software.svg";
import aws from "../assets/aws.svg";

type FeaturedTopic =
  | "HTML / CSS"
  | "자바스크립트"
  | "프레임워크 및 라이브러리"
  | "네트워크"
  | "운영체제"
  | "자료구조"
  | "보안"
  | "소프트웨어 아키텍처"
  | "클라우드와 배포";

export interface CardProps {
  topic: FeaturedTopic;
  img: string;
  content: string;
}
export interface ButtonProps {
  text: string;
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  backGroundColor?: string;
  hoverColor?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}
export interface TopicCardProps {
  card: CardProps;
  openModal: (card: CardProps) => void;
}
export interface ModalProps {
  card: CardProps;
  closeModal: () => void;
}
export interface DropDownProps<T> {
  title: string;
  content: T[];
  select: (value: T) => void;
}
export interface MultipleQuestion {
  question: string;
  options: string[];
  answer: string;
  commentary?: string;
}
export interface TrueOrFalse {
  question: string;
  option: boolean;
  answer: boolean;
  commentary?: string;
}
export interface FillBlank {
  question: string;
  answer: string[];
  commentary?: string;
}

export type Difficulty = "상" | "중" | "하";
export type QuizNum = 5 | 10 | 15;
export type QuizType = "객관식" | "빈칸 채우기" | "참 또는 거짓";

export interface QuizOption {
  card: CardProps;
  difficulty: Difficulty;
  quizNum: QuizNum;
  quizType: QuizType;
}

export interface Quiz {
  MultipleQuestion: MultipleQuestion[];
  TrueOrFalse: TrueOrFalse[];
  FillBlank: FillBlank[];
}

export interface QuizResult {
  question: string;
  commentary: string;
  userAnswer: [number, string | boolean];
  answer: string[] | string | boolean;
  $isRight: boolean;
}
export interface IncorrectAnswer {
  question: string;
  correctAnswer: string | boolean;
  userAnswer: string | boolean;
  commentary: string;
  onDelete?: () => void;
}

// 퀴즈 분류 데이터
const htmlCSSCard: CardProps = {
  topic: "HTML / CSS",
  img: html,
  content: "HTML5, 시멘틱 태그의 개념, CSS3, 반응형 디자인에 대해 알아봅시다",
};
const javascriptCard: CardProps = {
  topic: "자바스크립트",
  img: javascript,
  content: "ES6, DOM 조작, 비동기 프로그래밍에 대해 알아봅시다",
};
const reactCard: CardProps = {
  topic: "프레임워크 및 라이브러리",
  img: reactLogo,
  content: "React의 상태 관리, Hooks, 컴포넌트 기반 설계에 대해 알아봅시다",
};
const netWorkCard: CardProps = {
  topic: "네트워크",
  img: network,
  content: "HTTP/HTTPS, RESTful API, GraphQL에 대해 알아봅시다",
};
const osCard: CardProps = {
  topic: "운영체제",
  img: linux,
  content: "프로세스와 스레드, 메모리 관리, 파일 시스템에 대해 알아봅시다",
};
const dataStructureCard: CardProps = {
  topic: "자료구조",
  img: dataStructure,
  content: "배열, 연결 리스트, 해시 테이블, 트리, 그래프에 대해 알아봅시다",
};

const securityCard: CardProps = {
  topic: "보안",
  img: security,
  content: "OAuth2, JWT, 세션 관리, 대칭 및 비대칭 암호화 등에 대해 알아봅시다",
};

const architectureCard: CardProps = {
  topic: "소프트웨어 아키텍처",
  img: software,
  content: "디자인 패턴, 마이크로서비스, MVC 패턴 등에 대해 알아봅시다",
};

const cloudAndDeployCard: CardProps = {
  topic: "클라우드와 배포",
  img: aws,
  content: "도커, 쿠버네티스, AWS 등에 대해 알아봅시다",
};
export {
  htmlCSSCard,
  javascriptCard,
  reactCard,
  netWorkCard,
  osCard,
  dataStructureCard,
  securityCard,
  architectureCard,
  cloudAndDeployCard,
};
