import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #ff4d4d;
  padding: 1rem 0;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
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
  gap: 25px;
  @media (min-width: 700px) {
    gap: 40px;
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
        <div>
          <i className="fa-solid fa-laptop-code"></i> CS Hub
        </div>
        <UserMenu>
          <Link to="/" onClick={handleClick}>
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
