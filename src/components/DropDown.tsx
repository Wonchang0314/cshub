import { useState } from "react";
import styled from "styled-components";
import { Difficulty, DropDownProps, QuizNum, QuizType } from "../types/data";
import { motion, Variants } from "framer-motion";

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const DropdownButton = styled(motion.button)`
  background-color: #f0f0f0;
  width: 100%;
  margin: auto;
  color: black;
  padding: 1rem;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: start;
  display: flex;
  font-weight: 500;
  justify-content: space-between;
  &:hover {
    background-color: #d8d8d8;
  }
`;

const DropdownMenu = styled(motion.ul)<{ $isOpen: boolean }>`
  background: white;
  position: absolute;
  top: 80%;
  left: 0;
  border: 3px solid #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  margin: 0;
  margin-bottom: 50px;
  list-style: none;
  width: 100%;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  z-index: 1000;
`;

const dropdownVariants: Variants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      delayChildren: 0.1, // 부모보다 뒤에 나타나도록 보장
      staggerChildren: 0.03, // 자식요소들 사이에 딜레이
      duration: 0.2,
    },
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2,
    },
  },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 1 } },
};

const DropdownItem = styled(motion.li)`
  padding: 10px 15px;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = ({ title, content, select }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState<Difficulty | QuizNum | QuizType | string>(
    title
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (value: Difficulty | QuizNum | QuizType): void => {
    if (
      typeof value === "string" &&
      (value === "상" || value === "중" || value === "하")
    ) {
      setText(value);
      select(value);
    } else if (typeof value === "number") {
      setText(value);
      select(value);
    } else {
      setText(value);
      select(value);
    }
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton whileTap={{ scale: 0.97 }} onClick={toggleDropdown}>
        <span>{text}</span>
        <motion.svg
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          width="15"
          height="15"
          viewBox="0 0 20 20"
        >
          <path d="M0 7 L 20 7 L 10 16" />
        </motion.svg>
      </DropdownButton>
      <div>
        <DropdownMenu
          $isOpen={isOpen}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={dropdownVariants}
        >
          {Object.entries(content).map(([, value], idx) => (
            <DropdownItem
              key={idx}
              variants={itemVariants}
              onClick={() => selectOption(value)}
            >
              {value}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;
