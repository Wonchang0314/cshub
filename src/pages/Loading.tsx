import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
`;

const Icons = styled.div`
  font-size: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 700px) {
    font-size: 60px;
  }
`;
const SecondIcon = styled.div`
  font-size: 55px;
  display: flex;
  @media (max-width: 700px) {
    font-size: 45px;
  }
`;
const ThirdIcon = styled.div`
  font-size: 40px;
  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
`;
// 애니메이션 설정
const gearVariants = {
  rotate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 3,
      ease: "easeOut",
    },
  },
};

const LoadingPage = () => {
  return (
    <Container>
      <Icons>
        <motion.i
          className="fa-solid fa-gear"
          variants={gearVariants}
          animate="rotate"
        ></motion.i>
        <SecondIcon>
          <motion.i
            className="fa-solid fa-gear"
            variants={gearVariants}
            animate="rotate"
            style={{ marginRight: "5px" }}
          ></motion.i>
          <ThirdIcon>
            <motion.i
              className="fa-solid fa-gear"
              variants={gearVariants}
              animate="rotate"
            ></motion.i>
          </ThirdIcon>
        </SecondIcon>
      </Icons>

      <Text>
        퀴즈를 생성중입니다 <br />
        잠시만 기다려주세요
      </Text>
    </Container>
  );
};

export default LoadingPage;
