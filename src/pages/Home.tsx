import { useNavigate } from "react-router-dom";
import {
  Introduction,
  Title,
  SubTitle,
  ButtonContainer,
  Instruction,
} from "./styles/Home.style";
import Button from "../components/Button";
import GridBox from "../layout/GridBox";
import FeatureCard from "../components/FeatureCard";
import cursorIcon from "../assets/cursorIcon.svg";
import podiumIcon from "../assets/podiumIcon.svg";
import target3D from "../assets/target3D.svg";
import styled from "styled-components";
import { useCallback } from "react";
const Main = styled.div`
  margin-top: 80px;
`;
const HowToPlay = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  color: black;
`;
const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/selectTopic");
  }, [navigate]);

  return (
    <Main>
      <Introduction>
        <Title>
          LEVEL UP <span>YOUR CS SKILLS</span> <br />
          WITH QUIZZES
        </Title>
        <SubTitle>
          CSQuizHub에서 재미있는 퀴즈를 통해 CS 지식을 쉽게 배우고 즐겨보세요!
          직접 정한 난이도와 문제 유형으로 문제를 풀며 CS 개념을 자연스럽게
          익히고, 새로운 스킬을 쌓아보세요.
        </SubTitle>
        <ButtonContainer>
          <Button
            onClick={handleClick}
            width="200px"
            fontSize="large"
            fontWeight="bold"
            text="퀴즈 주제 선택"
            backGroundColor="#6f2dbd"
            hoverColor="#5a21a6"
          />
        </ButtonContainer>
      </Introduction>
      <Instruction>
        <HowToPlay>플레이 방법</HowToPlay>
        <GridBox>
          <FeatureCard
            icon={cursorIcon}
            title="퀴즈 주제 선택"
            description="CS 지식에 관한 다양한 주제가 있어요"
          />
          <FeatureCard
            icon={podiumIcon}
            title="난이도 및 옵션 선택"
            description="난이도와 문제 유형을 선택하세요"
          />
          <FeatureCard
            icon={target3D}
            title="퀴즈 학습하기"
            description="퀴즈를 풀며 CS 스킬을 향상시키세요"
          />
        </GridBox>
      </Instruction>
    </Main>
  );
};

export default HomePage;
