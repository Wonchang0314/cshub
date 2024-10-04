import {
  Container,
  Icons,
  SecondIcon,
  ThirdIcon,
  Text,
} from "./styles/Loading.style";
import { motion } from "framer-motion";

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
