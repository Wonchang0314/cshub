import { useNavigate } from "react-router-dom";
import {
  Header,
  Introduction,
  Example,
  Title,
  SubTitle,
  QuestionCard,
  Question,
  Options,
  Feature,
} from "./styles/Home.style";
import Button from "../components/Button";
import Option from "../components/multipleQuestion/Option";
import GridBox from "../layout/GridBox";
import FeatureCard from "../components/FeatureCard";
import quizIcon from "../assets/quiz.svg";
import noteIcon from "../assets/note.svg";
import pdfIcon from "../assets/pdf.svg";
import Footer from "../layout/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/selectTopic");
  };

  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <Header>
        <Introduction>
          <Title>
            AI 퀴즈 생성 서비스 <br /> CS Hub{" "}
            <i className="fa-solid fa-laptop-code" />
          </Title>
          <SubTitle>
            CS Hub는 선택한 주제를 기반으로 퀴즈를 생성하는 AI 기반
            서비스입니다. 객관식, 참/거짓, 빈칸 채우기 문제 등을 선택할 수
            있습니다. 기초부터 고급 수준까지의 퀴즈를 통해 자신의 실력을
            진단하세요.
          </SubTitle>
          <Button
            text="시작하기"
            fontSize="x-large"
            fontWeight="bold"
            onClick={handleClick}
          />
          <Example>
            <QuestionCard>
              <Question>
                Q. 신입 개발자에게 특히 중요한 것은 무엇일까요?{" "}
              </Question>
              <Options>
                <Option content="탄탄한 CS 지식" isClicked={true} />
                <Option content="최신 기술 스택 활용 경험" isClicked={false} />
                <Option content="화려한 개발 장비" isClicked={false} />
                <Option content="잔디(커밋) 수 늘리기" isClicked={false} />
              </Options>
            </QuestionCard>
          </Example>
        </Introduction>
      </Header>
      <main>
        <Feature>
          <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>기능</h2>
          <GridBox>
            <FeatureCard
              icon={quizIcon}
              title="다양한 유형의 문제"
              description="객관식, 참/거짓, 빈칸 채우기 등 다양한 유형의 문제 생성"
            />
            <FeatureCard
              icon={noteIcon}
              title="기록"
              description="이전에 풀었던 문제를 추적, 오답노트 기능 제공"
            />
            <FeatureCard
              icon={pdfIcon}
              title="PDF로 내보내기"
              description="문제 및 퀴즈를 PDF 파일로 저장할 수 있습니다"
            />
          </GridBox>
        </Feature>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
