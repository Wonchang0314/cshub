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

const Header = () => {
  return (
    <HeaderContainer>
      <Inner>
        <div>
          <i className="fa-solid fa-laptop-code"></i> CS Hub
        </div>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
      </Inner>
    </HeaderContainer>
  );
};

export default Header;
