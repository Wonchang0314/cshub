import styled from "styled-components";

const Header = styled.header`
  width: 95%;
  margin: auto;
  background-color: #ff5733;
  padding: 1rem;
  padding-bottom: 3rem;
  text-align: center;
  border-radius: 1rem
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 700px) {
    width: 90%;
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
const Example = styled.div`
  width: 90%;
  margin: auto;
  border-radius: 15px;
  padding: 1rem 0 2rem 0;
  background-color: whitesmoke;
  color: black;
  margin-top: 3rem;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    display: none;
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
    font-size: 32px;
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
    font-size: 14px;
  }
`;
const QuestionCard = styled.div`
  width: 85%;
  margin: auto;
  disply: flex;
  justify-content: center;
  align-items: center;
`;

const Question = styled.p`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: medium;
  }
`;
const Options = styled.ul`
  margin: 0;
  padding: 2rem;
  @media (max-width: 700px) {
    padding: 0;
  }
`;
const Feature = styled.section`
  color: black;
  text-align: center;
  margin-top: 50px;
`;

export {
  Header,
  Introduction,
  Example,
  Title,
  SubTitle,
  QuestionCard,
  Question,
  Options,
  Feature,
};
