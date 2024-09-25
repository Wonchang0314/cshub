import styled from "styled-components";
import Intro from "../assets/Intro.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Header = styled.header`
  width: 95%;
  margin: 1rem auto;
  background-color: #ff5733;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    width: 85%;
  }
`;
const Introduction = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  text-align: center;

  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const ImgCon = styled.div`
  margin-top: 3rem;
  img {
    width: 80%;
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    img {
      width: 90%;
    }
  }
`;
const Title = styled.h1`
  font-size: 4rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 1280px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 24px;
  }
`;
const SubTitle = styled.p`
  line-height: 2rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 1280px) {
    font-size: 18px;
  }
  @media (max-width: 700px) {
    line-height: 24px;
    font-size: 0.6rem;
  }
`;
const HomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/selectTopic");
  };

  return (
    <Header>
      <Introduction>
        <Title>
          AI 퀴즈 생성 서비스 <br /> CS Hub{" "}
          <i className="fa-solid fa-laptop-code" />
        </Title>
        <SubTitle>
          개발자의 기본기는 탄탄한 CS지식에서 출발합니다
          <br />
          기초부터 고급 수준까지의 퀴즈를 통해 자신의 실력을 진단하세요. <br />
          AI 기반의 맞춤형 퀴즈로 언제 어디서든 자신의 페이스대로 학습할 수
          있습니다
        </SubTitle>
        <Button
          text="시작하기"
          fontSize="x-large"
          fontWeight="bold"
          onClick={handleClick}
        />
        <ImgCon>
          <img src={Intro} alt="Introduction" />
        </ImgCon>
      </Introduction>
    </Header>
  );
};

export default HomePage;
