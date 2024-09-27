import styled from "styled-components";
import { ReactNode } from "react";

const GridCon = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 100px;

  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface GridBoxProps {
  children?: ReactNode;
}
const GridBox = ({ children }: GridBoxProps) => {
  return <GridCon>{children}</GridCon>;
};

export default GridBox;
