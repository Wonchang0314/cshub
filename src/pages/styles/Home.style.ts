import styled from "styled-components";

const Main = styled.div`
  margin-top: 80px;
`;

const HowToPlay = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 30px;
  color: black;
`;

const Introduction = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 4rem 2rem;
  text-align: center;
  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 80%;
    padding: 2rem 0;
    padding-bottom: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #6f2dbd;

  span {
    color: #ffcc00;
  }

  @media (max-width: 1280px) {
    font-size: 2.25rem;
  }

  @media (max-width: 700px) {
    font-size: 1.75rem;
  }
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  line-height: 2rem;
  color: #333;
  margin-bottom: 2rem;

  @media (max-width: 1280px) {
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Instruction = styled.section`
  background-color: white;
  padding-top: 50px;
`;

export {
  Main,
  HowToPlay,
  Introduction,
  Title,
  SubTitle,
  ButtonContainer,
  Instruction,
};
