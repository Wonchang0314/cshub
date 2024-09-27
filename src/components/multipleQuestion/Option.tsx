import styled from "styled-components";
import { motion } from "framer-motion";

const OptionButton = styled(motion.button)<{ isClicked: boolean }>`
  width: 100%;
  margin: auto;
  font-size: large;
  font-weight: 600;
  color: black;
  padding: 1.3rem 1.5rem;
  border: 2px solid ${({ isClicked }) => (isClicked ? "#ff4d4d" : "#f5f5f5")};
  background-color: ${({ isClicked }) => (isClicked ? "#f5f5f5" : "white")};
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  text-align: start;
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: #f5f5f5;
    border: 2px solid #ff4d4d;
  }
`;
interface OptionProps {
  content: string;
  isClicked: boolean;
  onClick?: () => void;
}

const Option = ({ content, isClicked, onClick }: OptionProps) => {
  return (
    <OptionButton
      whileTap={{ scale: 0.97 }}
      isClicked={isClicked}
      onClick={onClick}
    >
      <span>{content}</span>
    </OptionButton>
  );
};

export default Option;
