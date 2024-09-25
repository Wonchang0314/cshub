import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #ff4d4d;
  padding: 1.2rem;
  color: white;
  font-size: large;
  text-align: center;

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
