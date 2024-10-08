import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  margin: auto;
  padding: 1rem 0;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 2rem;
  border-bottom: 2px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 1280px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 700px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: auto;
    margin-right: 1rem;

    @media (max-width: 700px) {
      width: 40px;
    }
  }

  span {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;

    @media (max-width: 700px) {
      font-size: 1.5rem;
    }
  }

  span strong {
    color: #ffcc00;
  }
`;

const Introduction = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  }
`;

const Instruction = styled.section`
  background-color: white;
  padding-top: 50px;
`;
export {
  Header,
  Logo,
  Introduction,
  Title,
  SubTitle,
  ButtonContainer,
  Instruction,
};
