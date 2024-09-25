import { ButtonProps } from "../types/data";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonCom = styled(motion.button)<ButtonProps>`
  border: none;
  background-color: ${(props) =>
    props.disabled
      ? "lightgray"
      : props.backGroundColor
      ? props.backGroundColor
      : "#101010"};
  color: white;

  padding: 1rem 1.5rem;
  border-radius: 1.5rem;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "medium")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "lightgray"
        : props.hoverColor
        ? props.hoverColor
        : "#282828"};
  }
  @media (max-width: 700px) {
    font-size: medium;
    width: 120px;
    font-size: large;
    padding: 0.8rem 1.2rem;
  }
`;

const Button = ({
  text,
  fontSize,
  fontWeight,
  backGroundColor,
  hoverColor,
  isDisabled,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonCom
      text={text}
      whileHover={isDisabled ? {} : { scale: 1.07 }}
      whileTap={isDisabled ? {} : { scale: 0.97 }}
      onClick={onClick}
      fontSize={fontSize}
      fontWeight={fontWeight}
      backGroundColor={backGroundColor}
      hoverColor={hoverColor}
      disabled={isDisabled}
    >
      {text}
    </ButtonCom>
  );
};

export default Button;
