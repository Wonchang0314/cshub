import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #6f2dbd;
  padding: 1.2rem;
  color: white;
  font-size: large;
  text-align: center;
  border-top: 2px solid #eaeaea;
  box-shadow-top: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    font-size: medium;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>© Created by developerseok@gmail.com.</FooterContainer>
  );
};

export default Footer;
