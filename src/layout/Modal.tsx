import { ModalProps } from "../types/data";
import styled from "styled-components";
import fetchQuiz from "../api/createQuiz";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";
import Button from "../components/Button";
import { useQuizStore } from "../store/quiz";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`;

const ModalContainer = styled.div`
  background-color: white;
  color: black;
  padding: 2rem;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;

  @media (max-width: 700px) {
    width: 270px;
  }
`;

const ModalHeader = styled.header`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuCon = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.footer`
  display: flex;
  justify-content: end;
  gap: 15px;
  margin-top: 20px;
`;

const Modal = ({ card, closeModal }: ModalProps) => {
  const navigate = useNavigate();
  const {
    difficulty,
    quizNum,
    quizType,
    setDifficulty,
    setQuizType,
    setQuizNum,
    setIsLoading,
    setResponse,
  } = useQuizStore();

  const createQuiz = async () => {
    setIsLoading(true);
    navigate("/loading");
    try {
      const data = await fetchQuiz({ card, difficulty, quizNum, quizType });
      setResponse(data);
      navigate("/quiz");
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Background>
      <ModalContainer>
        <ModalHeader>퀴즈 옵션을 선택하세요</ModalHeader>
        <main>
          <MenuCon>
            <DropDown
              title="난이도 선택"
              content={["상", "중", "하"]}
              select={setDifficulty}
            />
            <DropDown
              title="문제 갯수 선택"
              content={[5, 10, 15]}
              select={setQuizNum}
            />
            <DropDown
              title="문제 종류 선택"
              content={["객관식", "빈칸 채우기", "참 또는 거짓"]}
              select={setQuizType}
            />
          </MenuCon>
        </main>
        <ButtonContainer>
          <Button
            text="닫기"
            fontSize="large"
            backGroundColor="#ff4d4d"
            hoverColor="#e04444"
            onClick={closeModal}
          />
          <Button
            text="퀴즈 시작"
            fontSize="large"
            fontWeight="bold"
            backGroundColor="#ff4d4d"
            hoverColor="#e04444"
            onClick={createQuiz}
          />
        </ButtonContainer>
      </ModalContainer>
    </Background>
  );
};

export default Modal;
