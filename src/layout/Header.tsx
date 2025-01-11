import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../assets/logoImage.svg";

const HeaderContainer = styled.header`
  background-color: white;
  padding: 1rem 0;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  border-bottom: 2px solid #eaeaea;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    margin-right: 1rem;

    @media (max-width: 700px) {
      width: 40px;
      height: 40px;
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

const Inner = styled.div`
  width: 92%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    width: 85%;
  }
`;
const UserMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  a {
    i {
      font-size: 1.5rem;
    }

    &:first-child i {
      color: #5305c7;
    }

    &:nth-child(2) i {
      color: #ffcd05;
    }
  }
`;
const Header = () => {
  const handleClick = () => {
    sessionStorage.removeItem("quizData");
    sessionStorage.removeItem("quizType");
    sessionStorage.removeItem("quizNum");
  };
  return (
    <HeaderContainer>
      <Inner>
        <Logo>
          <img src={logoImage} alt="CSQuizHub 로고" />
          <span>
            <strong>CS</strong>QuizHub
          </span>
        </Logo>
        <UserMenu>
          <Link to="/myPage" onClick={handleClick}>
            <i className="fa-solid fa-user" />
          </Link>

          <Link to="/" onClick={handleClick}>
            <i className="fa-solid fa-house" />
          </Link>
        </UserMenu>
      </Inner>
    </HeaderContainer>
  );
};

export default Header;
